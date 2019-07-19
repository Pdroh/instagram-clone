import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { validations } from '../../infra/validations';

export class FormBuilder extends Component {

    state = {
        fields: [],
        errors: []
    }

    setFields = () => {
        this.setState({
            fields: this.props.fields,
            errors: {}
        })
    }

    componentDidMount() {
        this.setFields();
    }

    handleChange = fieldName => {
        return novoValor => {
            const currentField = this.state.fields.find(field => {
                return field.name === fieldName;
            });

            this.validateField(currentField, novoValor);
        };
    }

    getAllValues = () => {
        // [Array de algo] .map [Array de outra coisa] (com mesmo numero itens)
        // [Array de algo] .reduce Qualquer dado
        return this.state.fields.reduce((dadoFinal, item) => {
        dadoFinal[item.name] = item.value;
        return dadoFinal;
        }, {}); // { login: omariosouto }
    };

    validateField = (currentField, novoValor) => {
        const fieldName = currentField.name;
        const errors = [];
        currentField.syncValidators.forEach(syncValidator => {
        const validatorType = syncValidator[0]; // required, minlength
        const validatorData = syncValidator[1];
        const validatorMessage = syncValidator[2];
        const isInvalidResult = validations[validatorType](
            novoValor,
            validatorData
        );
        if (isInvalidResult)
            errors.push({ type: validatorType, message: validatorMessage });
        });

        this.setState(
            prevState => ({
                fields: prevState.fields.map(field => {
                if (field.name === fieldName) return { ...field, value: novoValor };
                return field;
                }),
                errors: { ...prevState.errors, [fieldName]: errors }
            }),
            () => {
                // console.log("Callback, pós atualizar o state");
            }
        );
    };

    handleFormBuilderSubmit = () => {
        const validationsPromises = this.state.fields.map(field => {
            return this.validateField(field, field.value);
        });

        Promise.all(validationsPromises).then(() => {
            const errors = this.state.errors;
            const isAllFieldsValid = (isValid = Object.keys(errors).reduce(
                (isValid, errorKey) => {
                if (errors[errorKey].length > 0) return false;
                    return isValid;
                },
                true
            ));

            if (isAllFieldsValid) {
                this.props.onSuccess && this.props.onSuccess(this.getAllValues());
            } else {
                console.warn("Você fez merda, errou!", errors);
            }
        });
    };


    render() {

        return (
            <View>
                
                {this.state.fields.map(field => {
                    const fieldErrors = this.state.errors[field.name] || [];
                    return (
                        <View key={field.id}>
                        <TextInputSpot
                            field={field}
                            onChangeText={this.handleChange(field.name)}
                        />
                        
                        {fieldErrors.map(erroDoField => {
                            return <Text key={erroDoField.message}>- {erroDoField.message}</Text>;
                        })}
                        </View>
                    );
                })}

                <TouchableOpacity 
                    style={{ backgroundColor: 'black', padding: 15, borderRadius: 10 }}
                    onPress={this.handleFormBuilderSubmit}
                >
                    <Text style={{ color: 'white' }}>Esse é o botão cadastrar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const TextInputSpot = ({ field, onChangeText }) => {
    return (
        <View>
            <Text>{field.label}</Text>
            <TextInput key={field.id} style={TextInputSpotStyle.textInput} value={field.value} onChangeText={onChangeText} />
        </View>
    );
}

const TextInputSpotStyle = StyleSheet.create({
    textInput: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: "#666",
        alignSelf: "stretch",
        marginBottom: 15
    }
})
