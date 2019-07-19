import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import PasswordTextBox from '../../components/PasswordTextBox';
import { Item, Input, Icon, Label, View } from 'native-base';
import SpotService from '../../services/SpotService';
import { FormBuilder } from '../../components/FormBuilder';

export class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        login: '',
        senha: '',
        submmited: false
    }

    handlerChange = nomeDoCampo => {
        return valorDoCampo => {
            this.setState({ [nomeDoCampo]: valorDoCampo })
        }
    }

    handlerUserLogin = values => {

        SpotService.login({ senha: values.senha, login: values.login })
        .then(() => { this.props.navigation.navigate('Auth') })
        .catch(err => { alert("Aconteceu algum bug"); })

    }

    render(){
        return(
            <KeyboardAvoidingView 
                style={styles.container}
                behavior='padding'
                enabled
            >
                <FormBuilder 

                    onSuccess={values => {
                            this.handlerUserLogin(values)
                        }
                    }
                
                    fields={[
                        {
                            id: 1,
                            name: 'login',
                            label: 'Login',
                            type: 'text',
                            value: 'rafael',
                            syncValidators: [
                                ['required', {}, 'Este campo é obrigatório'],
                                ['minlength', {min: 3}, 'Necessário pelo menos 3 caracteres']
                            ]
                        },
                        {
                            id: 2,
                            name: 'senha',
                            label: 'Senha',
                            type: 'text',
                            value: '123456',
                            syncValidators: [['required', {}, 'Este campo é obrigatório']]
                        }
                    ]}
                />
            </KeyboardAvoidingView>

            // <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            //     <Text style={styles.title}>Instaelum</Text>
                
            //     <Item floatingLabel style={{ marginBottom: 15 }}>
            //         <Label>Usuário</Label>
            //         <Input onChangeText={this.handlerChange('login')} />
            //     </Item>
                
            //     <PasswordTextBox icon="lock" label="Senha" onChangeText={this.handlerChange('senha')} />
                
            //     <TouchableOpacity onPress={this.handlerUserLogin} style={styles.btn}>
            //         <Text style={styles.textColor}>Login</Text>    
            //     </TouchableOpacity>    
            // </KeyboardAvoidingView>       
        );
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20
    },
    btn: {
      backgroundColor: "#3095f3",
      borderRadius: 10,
      padding: 10,
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
    textColor: {
      color: "#fff",
      fontSize: 15
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 50,
      paddingRight: 50
    },
    formTextField: {
      height: 40,
      borderBottomWidth: 2,
      borderBottomColor: "#666",
      alignSelf: "stretch",
      marginBottom: 15
    }
  });