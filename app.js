import express from 'express';
import apieRouter from './src/api/router';

const app = express();

// route
app.get('/', (req, res) => {
    res.send('Search My Job!')
});
app.use('/api', apieRouter)

export default app;