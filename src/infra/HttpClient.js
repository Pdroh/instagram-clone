
export const HttpClient =  {
    post: (url, {body}) => {
        return fetch(url, {
            method: 'POST', body: JSON.stringify(body),
            headers: { 'Content-type': 'application/json' }
        });
    }
};
