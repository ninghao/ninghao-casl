import express from 'express';
import cors from 'cors';

import appRouter from './app.router';
import { defaultErrorHandler } from './app.middleware';

/**
 * 创建应用
 */
const app = express();

/**
 * CORS
 */
app.use(cors());

/**
 * 处理 JSON
 */
app.use(express.json());

/**
 * 路由
 */
app.use(appRouter);

/**
 * 默认异常处理器
 */
app.use(defaultErrorHandler);

/**
 * 导出应用
 */
export default app;
