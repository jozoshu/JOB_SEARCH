import express from 'express';
import apieRouter from './src/api/router';
import homeRouter from './src/home/router';

const app = express();

// route
app.get('/', homeRouter);
app.use('/api', apieRouter);

export default app;
