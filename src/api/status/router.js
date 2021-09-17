import { Router } from 'express';
import lastSuccess from './controllers';

const router = Router();

router.get('/', lastSuccess);

export default router;