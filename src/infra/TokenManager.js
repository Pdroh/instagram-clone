import { AsyncStorage } from 'react-native';

export const TokenManager =  {
    setToken: async token => {
        AsyncStorage.setItem('TOKEN', token);
    },
    getToken: async () => {
        return await AsyncStorage.getItem('TOKEN');
    }
}

