import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Feed from './Feed';
import LogoTitle from './src/components/Header';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'

const PerfilScreen = props => (
    <View>
        <Button title='Ir para Feed' onPress={() => props.navigation.navigate("FeedStackHome")} />
    </View>       
)

const FeedStack = createStackNavigator({
    FeedStackHome:{
        screen: Feed
    }
})

const PerfilStack = createStackNavigator(
    {
        PerfilStackHome:{
            screen: PerfilScreen
        }
    }, 
    {
        defaultNavigationOptions: {
            headerTitle: <LogoTitle texto={'Perfil'} />,
            headerStyle: {
                backgroundColor: '#00E676',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#000'
            }
        }
    }
)

const AreaLogado = createMaterialBottomTabNavigator(
    {
        Feed: {
            screen: FeedStack,  
            navigationOptions:{  
                tabBarLabel:'Feed',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-home'}/>  
                    </View>
                )
            }
        },
        Perfil: {
            screen: PerfilStack,  
            navigationOptions:{  
                tabBarLabel:'Perfil',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-person'}/>  
                    </View>
                )
            }
        }
    }, 
    {
        initialRouteName: 'Feed',
        activeColor: '#000',
        inactiveColor: '#FFF',
        barStyle: { backgroundColor: '#00E676' },
    }
);

const SistemaDeNavegacao = AreaLogado;

export default createAppContainer(SistemaDeNavegacao);
