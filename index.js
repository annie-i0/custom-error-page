const { response, request } = require('express')
const express = require ('express')
const app = express ()

app.use(express.static('public'))

app.get('/', (request, response) => {
    return response.send()
})

app.all('*', (request, response) => {
    return response.send('Hello')
})

app.listen(3000)