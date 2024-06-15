export const routes = [
    {
        path: '/',
        method: 'GET',
        handler: (req, h) => {
            return 'ini halaman home';
        }
    },
    {
        path: '/',
        method: '*',
        handler: (req, h) => {
            return `halaman tidak dapat diakses dengan method tersebut`;
        }
    },
    {
        path: '/users',
        method: 'GET',
        handler: (req, h) => {
            return JSON.stringify({
                name: 'Umar Hadi Mukti',
                email: 'umad@gmail.com',
            })
        }
    },
    {
        path: '/users/{user}',
        method: 'GET',
        handler: (req, h) => {
            return JSON.stringify({
                name: 'Umar Hadi Mukti',
                username: req.params.user,
                email: 'umarhadimukti@gmail.com',
                phone: '082342952324',
            });
        }
    },
    {
        path: '/books',
        method: 'GET',
        handler: (req, h) => {
            return JSON.stringify({
                language: req.query.lang,
                data: [
                    { name: 'Boruto x Naruto' }
                ],
            });
        }
    },
    {
        path: '/books/create',
        method: 'POST',
        handler: (req, h) => {
            return JSON.stringify({
                title: req.payload.title,
                price: req.payload.price,
            });
        }
    },
    {
        path: '/test/aja',
        method: 'GET',
        handler: (req, h) => {
            const response = h.response(JSON.stringify({
                message: 'berhasil oiiii',
            }));
            response.header('Content-Type', 'application/json');
            return response;
        }
    },
    {
        path: '/{any*}',
        method: '*',
        handler: (req, h) => {
            return 'halaman tidak ditemukan.';
        }
    }
];