const express = require('express')

const server = express()
const PORT= 3001

server.set('view engine', 'ejs')
server.use((req, res, next) => {
    if(req.method === "GET" && req.url ==="/home") {
        res.redirect('/')
    }
    next()
})

server.get('/', (req, res) => {
    res.status(200)
    res.contentType('text/html')
    res.render(`home`, {movie: "Inception"})
})

server.get('/about', (req, res) => {
    res.status(200)
    res.contentType('text/html')
    res.render(`about`)
})

server.get('/contact', (req, res) => {
        res.status(200)
        res.contentType('text/html')
        res.render(`contact`)
})

server.get('*', (req, res) => {
    res.status(404)
    res.contentType('text/html')
    res.render(`error`)
})

server.listen(PORT, () => {
    console.log("The server is running on PORT: " + PORT)
})