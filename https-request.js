//http Protocol

const https = require('https')

const config2 = {
    host: 'google.com',
    method: 'GET', 
    path: '/',  
    port: 443, 
    // port: 443 or 8443 (https library)
    // port: 80 or 8080 (http library)
}

const request = https.request(config2, (response) => {
    response.on('data', (data) => {
        console.log(String(data))
    })
})

request.on('error', (err) => {
    console.log(err)
})

request.end()
