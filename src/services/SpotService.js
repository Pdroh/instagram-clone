import { TokenManager } from "../infra/TokenManager";
import { HttpClient } from "../infra/HttpClient";

async function login({ login, senha }){
    return HttpClient.post('https://instalura-api.herokuapp.com/api/public/login', {
        body: { login, senha }
    })
    .then(respostaDoServidor => {
        return respostaDoServidor.text();
    })
    .then(async token => {
        if(!token) throw new Error('Token invalido')
        await TokenManager.setToken(token);
        //console.warn(await TokenManager.getToken());
    })
}

export default { login };