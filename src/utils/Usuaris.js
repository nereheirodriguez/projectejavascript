// src/utils/Usuaris.test.js
const axios = require('axios');

async function obtenirUsuaris() {
    try {
        const resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
        return resposta.data;
    } catch (error) {
        throw new Error('API Error');
    }
}

module.exports = { obtenirUsuaris };