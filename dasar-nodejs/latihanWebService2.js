import http from 'http';

const server = http.createServer((req, res) => {

    const { method, url } = req;

    switch (url) {
        case '/users':
            
            break;
    }

});

const HOSTNAME = 'localhost';
const PORT = 3001;

server.listen(PORT, HOSTNAME, () => console.log(`Running at ${HOSTNAME}:${PORT}`));