import { Router } from 'express';
import settings from '../api/config/settings';

const router = Router();

router.get('/', (req, res) => {
    res.sendFile(settings.BASE_DIR+'/pages/index.html')
});

export default router;
