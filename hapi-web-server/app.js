import Hapi from '@hapi/hapi';
import { routes } from './routes/web.js';

const initialServer = async () => {
    const PORT = 3000;
    const HOST = 'localhost';

    const server = Hapi.server({
        host: HOST,
        port: PORT,
    });

    server.route(routes);

    await server.start();
    console.log(`Server is running at port ${HOST}:${PORT}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});


initialServer();