import { TokenManager } from "../infra/TokenManager";
import { HttpClient } from "../infra/HttpClient";

async function login({ login, senha }){
    HttpClient.post('https://instalura-api.herokuapp.com/api/public/login', {
        body: { login, senha }
    })
    .then(respostaDoServidor => {
        return respostaDoServidor.text();
    })
    .then(async token => {
        await TokenManager.setToken(token);
        console.warn(await TokenManager.getToken());
    })
    .catch(err => {
        console.warn(err.message);
    })
}

export default { login };