const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200)
    res.end('<html><body><h1>Respondendo uma requisicao GET!</h1></body></html>')
  } else if (req.method === 'POST') {
    res.writeHead(200)
    res.end('Respondendo requisicao POST!')
  } else if (req.method === 'PUT') {
    res.writeHead(200)
    res.end('Respondendo requisicao PUT!')
  } else if (req.method === 'DELETE') {
    res.writeHead(200)
    res.end('Respondendo requisicao DELETE!')
  } else {
    res.writeHead(400)
    res.end(`Nao sei tratar esse metodo HTTP: ${req.method}`)
  }
})

server.listen(8080)
