const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end('Ola Toti!')
})

server.listen(8080)
