import { showNotes, showNote, addNotes } from "./controller.js";

export const routes = [
    {
        path: '/api',
        method: 'GET',
        handler: (req, h) => {
            return 'ini landing page';
        }
    },
    {
        path: '/api/notes',
        method: 'GET',
        handler: showNotes,
    },
    {
        path: '/api/notes/{id}',
        method: 'GET',
        handler: showNote,
    },
    {
        path: '/api/notes',
        method: 'POST',
        handler: addNotes,
    },
    {
        path: '/{any*}',
        method: 'GET',
        handler: (req, h) => {
            return JSON.stringify({
                message: 'halaman yang dicari tidak dapat ditemukan.',
            });
        }
    }
]