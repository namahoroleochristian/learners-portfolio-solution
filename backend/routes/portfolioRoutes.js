import { Router } from 'express';
const router = Router();
import { uploadPortfolio, getPortfolios } from '../controllers/googleDriveController';

router.post('/upload', uploadPortfolio);

router.get('/list', getPortfolios);

export default router;
