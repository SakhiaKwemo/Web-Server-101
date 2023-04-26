const net = require('net')

const server = net.createServer()

server.listen(3001, () => {
    console.log("The server is running on PORT 3001")
})

server.on('connection', (connection) => {
    console.log("welcome to this server")
    connection.write("hello")
})

server.on('data', (data) => {
    console.log(data)
})