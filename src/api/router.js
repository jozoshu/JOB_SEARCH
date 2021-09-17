import { Router } from 'express';
import sampleRouter from './sample/router';
import statusRouter from './status/router'

const router = Router();

router.use('/sample', sampleRouter);
router.use('/status', statusRouter);

export default router;
