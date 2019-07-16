import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import PasswordTextBox from '../../components/PasswordTextBox';
import { Item, Input, Icon, Label } from 'native-base';

export class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        login: '',
        senha: ''
    }

    handlerChange = nomeDoCampo => {
        return valorDoCampo => {
            this.setState({ [nomeDoCampo]: valorDoCampo })
        }
    }

    handlerUserLogin = () => {
        console.warn(this.state)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <Text style={styles.title}>Instaelum</Text>
                
                <Item floatingLabel style={{ marginBottom: 15 }}>
                    <Label>Usuário</Label>
                    <Input onChangeText={this.handlerChange('login')} />
                </Item>
                
                <PasswordTextBox icon="lock" label="Senha" onChangeText={this.handlerChange('senha')} />
                
                <TouchableOpacity onPress={this.handlerUserLogin} style={styles.btn}>
                    <Text style={styles.textColor}>Login</Text>    
                </TouchableOpacity>    
            </KeyboardAvoidingView>       
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