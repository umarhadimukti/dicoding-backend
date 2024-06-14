import http from 'node:http';

const { createServer } = http;

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Powered-By', 'Laravel and NodeJS');

    const { method, url } = req;

    if(url === '/') {
        if(method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if(method === 'POST') {
            let body = [];
    
            req.on('data', (chunk) => {
                body.push(chunk);
            });
 
            req.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server is running at 127.0.0.1:3000`);
});