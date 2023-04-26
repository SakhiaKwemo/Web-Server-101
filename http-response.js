const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.method)
    console.log(request.url)
    response.writeHead(200, {
        'Content-Type': 'text/html'
      })
    if(request.method === "GET" && request.url ==="/") {
        response.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1 style="color:red">HomePage</h1>
        </body>
        </html>`)
    }
    if(request.method === "GET" && request.url ==="/about") {
        response.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1 style="color:green">AboutPage</h1>
        </body>
        </html>`)
    }
    if(request.method === "GET" && request.url ==="/contact") {
        response.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1 style="color:purple">ContactPage</h1>
        </body>
        </html>`)
    }
})

server.listen(3001, () => {
    console.log("The server is running on PORT 3001")
})