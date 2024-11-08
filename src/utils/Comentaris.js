// src/utils/Comentaris.test.js
const fetch = require('node-fetch');

async function obtenirComentaris() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/comments');
    return await resposta.json();
}

module.exports = { obtenirComentaris };
