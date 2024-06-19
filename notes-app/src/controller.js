import { nanoid } from "nanoid";
import notes from "./notes.js";

export const showNotes = (req, h) => {
    if (notes.length > 0) {
        return h.response({
            status: 'available',
            data: notes,
        }).code(200).type('application/json');
    }

    return h.response({
        status: 'empty',
        message: 'Oops, catatan kamu masih kosong.',
    }).code(200).type('application/json');
};

export const showNote = (req, h) => {
    const id = req.params.id;
    const note = notes.find(note => {
        return note.noteId === id;
    });

    if (note) {
        return h.response({
            status: 'available',
            data: note,
        });
    }

    return h.response({
        status: 'empty',
        message: 'Oops, data tidak ada.',
    }).code(404);
};

export const addNotes = (req, h) => {
    const { title, tags, body } = req.payload;

    const noteId = nanoid(16);
    const timestamps = {
        createdAt: new Date().toISOString(),
        updateAt: '',
    };

    notes.push({ 
        noteId,
        title,
        tags,
        body,
        createdAt: timestamps.createdAt,
        updateAt: timestamps.createdAt,
     })

    const isSuccess = notes.filter(note => note.noteId === noteId).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Yay, berhasil menambah data.',
            data: {
                title,
                body,
            },
        });

        response.code(201);
        response.type('application/json');

        return response;
    }

    return h.response({
        status: 'failed',
        message: 'Oeps, gagal menambah data.',
    }).code(500);

}