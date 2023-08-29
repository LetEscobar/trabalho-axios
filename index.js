const axios = require('axios')

// PROMISSE
// O que é? Uma Promise é um objeto JavaScript que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Ela permite que você lide com operações assíncronas de forma mais concisa e legível, evitando o uso excessivo de callbacks.
// Como funciona? Uma Promise pode estar em três estados: pendente, resolvida ou rejeitada. Quando uma Promise é criada, ela está no estado pendente. Ela pode ser resolvida, ou seja, a operação assíncrona é concluída com sucesso, ou rejeitada, indicando que ocorreu um erro.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random()
        if (randomNumber > 0.5) {
            resolve(randomNumber)
        } else {
            reject(new Error('Ocorreu um erro!'))
        }
    }, 1000)
})

async function fetchDataWithTryCatch() {
    try {
        const result = await myPromise
        console.log('Resultado da Promise:', result)
    } catch (error) {
        console.error('Ocorreu um erro na Promise:', error)
    }
}

// Requisição com Axios
axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Dados da resposta da requisição:', response.data)
    })
    .catch(error => {
        console.error('Erro na requisição:', error)
    })

// Requisição no JsonPlaceholder usando Axios
axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(
            'Dados da resposta da requisição no JsonPlaceholder:',
            response.data
        )
    })
    .catch(error => {
        console.error('Erro na requisição:', error)
    })

fetchDataWithTryCatch()
