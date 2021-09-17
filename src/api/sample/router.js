import { Router } from 'express';

const router = Router();

// route: /api/sample
router.get('/', (req, res) => {
    const data = {'sample': 'data'}
    res.send(data);
});

export default router;
