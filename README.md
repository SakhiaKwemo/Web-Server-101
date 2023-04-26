# Lighthouse Labs | Web Server 101 

* [x] Review HTTP
* [x] What is a client ?
* [x] TCP request demo ?
* [x] HTTP Request Demo
    - PORT 443 = HTTPS
    - PORT 80 = HTTP
* [x] What is a server ?
* [x] TCP response Demo
* [x] HTTP Response Demo 
    - req.method 
    - req.url


    # ** BREAK ** 
    Routes = Method (get/post/put/del) + URL/PATH/ENDPOINT('/', '/about', '/contact')

    - response with routes DEMO
* [x] Express (w/ middleware) DEMO 
* [x] Express middleware Demo
* [x] Express with  EJs Templates Demo

## Computer Networking? 

- All the ways that computers are able to communicate information to each other (internet, bluetooth ...)

## Networking Protocols?

- TCP (Transmission Control Protocol)
- HTTP (HyperText Transfer Protocol)

## Client 
- Definition: Any software that is able to format a HTTP request
- Web Browser
- Command Terminal
- Website, Desktop Application

## Server
- Definition: Any software capable of handling HTTP requests and responding accordingly
- Web/Application Server

## Version differences HTTP vs Express

- Writing in Header
```js
//HTTP
    response.writeHead(200, {
        'Content-Type': 'text/html'
      })
//Express
    res.status(200)
    res.contentType('text/html')
```


- Handling Requests
```js
    //HTTP
    if(request.method === "GET" && request.url ==="/") 
    //Express
    server.get('/')
```


- Creating Server
```js
    //HTTP
    const server = http.createServer()

    //Express
    const server = express()
```


    