import express from 'express';
import path from 'path';
import apieRouter from './src/api/router';
import homeRouter from './src/home/router';

const app = express();

app.use(express.static(path.join(__dirname + '/build/')));

// route
app.get('/', homeRouter);
app.use('/api', apieRouter);
app.use('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

export default app;
