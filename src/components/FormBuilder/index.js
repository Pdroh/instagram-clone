import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export class FormBuilder extends Component {

    state = {
        fields: []
    }

    setFields = () => {
        this.setState({
            fields: this.props.fields
        })
    }

    componentDidMount() {
        this.setFields();
    }

    handlerFormBuilderSubmit = () => {
        console.warn('Devemos pegar os dados de TODOS os campos')
    }

    render() {

        return (
            <View>
                
                {this.state.fields.map(field =>{
                    return (
                        <TextInputSpot key={field.id} field={field} />
                    );
                })}

                <TouchableOpacity 
                    style={{ backgroundColor: 'black', padding: 15, borderRadius: 10 }}
                    onPress={this.handlerFormBuilderSubmit}
                >
                    <Text style={{ color: 'white' }}>Esse é o botão cadastrar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const TextInputSpot = ({ field }) => {
    return (
        <View>
            <Text>{field.label}</Text>
            <TextInput style={TextInputSpotStyle.textInput} value={field.value} />
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
