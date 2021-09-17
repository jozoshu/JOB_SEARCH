import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const data = {'sample': 'data'}
    res.send(data);
});

export default router;
