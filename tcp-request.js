//TCP Protocol

const net = require('net')

const config = {
    host: localhost, 
    port: 3000
}

const client = net.createConnection(config)

client.on('data', (data) => {
    console.log(data)
})


