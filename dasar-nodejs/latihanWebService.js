import http from 'http'

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    
    const { method, url } = req

    switch (url) {
        case '/employees':
            
            if (method === 'GET') {
                res.end('ini employees get')
            } else if (method === 'POST') {
                res.end('ini employees post')
            } else if (method === 'PUT') {
                res.end('ini employees put')
            } else if (method === 'DELETE') {
                res.end('ini employees delete')
            }

            break;
        case '/users':

            if (method === 'GET') {
                res.end('ini users get')
            } else if (method === 'POST') {
                res.end('ini users post')
            } else if (method === 'PUT') {
                res.end('ini users put')
            } else if (method === 'DELETE') {
                res.end('ini users delete')
            }

            break;
        case '/medicines':

            if (method === 'GET') {
                res.end('ini medicines get')
            } else if (method === 'POST') {
                res.end('ini medicines post')
            } else if (method === 'PUT') {
                res.end('ini medicines put')
            } else if (method === 'DELETE') {
                res.end('ini medicines delete')
            }

            break;
        default:
            res.end('rute tidak ditemukan');
    }

})

const HOSTNAME = 'localhost'
const PORT = 3000

server.listen(PORT, HOSTNAME, () => console.log(`Running at ${HOSTNAME}:${PORT}`))