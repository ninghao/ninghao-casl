import express from 'express';
import * as appController from './app.controller';

const router = express.Router();

router.get('/', appController.home);

/**
 * 导出路由
 */
export default router;
