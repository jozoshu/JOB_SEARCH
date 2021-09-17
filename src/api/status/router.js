import { Router } from 'express';
import sendFormat from '../core/response';
import getLastSuccess from './controllers';

const router = Router();

// route: /api/status
router.get('/last-success', sendFormat(getLastSuccess));

export default router;
