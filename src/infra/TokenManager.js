import { AsyncStorage } from 'react-native';

export const TokenManager =  {
    setToken: async token => {
        AsyncStorage.setItem('TOKEN', token);
    },
    getToken: async () => {
        return await AsyncStorage.getItem('TOKEN');
    },
    hasToken: async () => {
        const token = await TokenManager.getToken();
        return Boolean(token);
    },
    removeToken: async token => {
        await AsyncStorage.removeItem('TOKEN')
    }
}

