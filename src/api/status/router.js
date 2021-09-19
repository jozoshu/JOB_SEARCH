import { Router } from 'express';
import resFormat from '../core/response';
import controller from './controllers';

const router = Router();

// route: /api/status
router.get('/last-crawled', resFormat(controller.getLastCrawl));

export default router;
