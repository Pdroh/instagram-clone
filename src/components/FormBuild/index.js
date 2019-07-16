import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export class LoginScreen extends Component {
    componentDidMount() {
        const fields = [
        {
            id: 1,
            slug: "login",
            title: "Usuário",
            type: "text",
            syncValidators: []
        },
        {
            id: 2,
            slug: "senha",
            title: "Senha",
            type: "password",
            syncValidators: []
        }
        ];

        setTimeout(() => {
        this.setState({ fields });
        }, 2000);
    }

    render() {

        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}>Instaelum</Text>
                {this.state.fields.length === 0 ? <ActivityIndicator /> : null}
                {this.state.fields.map(field => {
                return (
                    <TextInput
                    key={field.id}
                    onChangeText={this.handleChange(field.slug)}
                    style={styles.formTextField}
                    placeholder={field.title}
                    secureTextEntry={field.type === "password" ? true : false}
                    />
                );
                })}
                <TouchableOpacity onPress={this.handleUserLogin} style={styles.btn}>
                <Text style={styles.textColor}>Logar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )

    }
}