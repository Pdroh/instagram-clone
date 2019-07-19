import React from 'react';
import { View, Text } from 'react-native';
import { TokenManager } from '../../infra/TokenManager';

export class AuthScreen extends React.Component {
    state = { ready: false };
    componentDidMount(){
        setTimeout(async () => {
            const hasUserToken = await TokenManager.hasToken();
            this.setState({ ready: true }, () => {
                this.props.navigation.navigate(hasUserToken ? 'Logado' : 'Deslogado');
            })
        }, 500);
    }
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Carregando...</Text>
            </View>
        )
    }

}