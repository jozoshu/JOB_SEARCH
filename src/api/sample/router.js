import express from 'express';

export const sampleRouter = express.Router();

sampleRouter.get('/sample', (req, res) => {
    const data = {"sample": "data"}
    res.send(data);
});
