import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (request: Request, response: Response) => {
  response.send({ title: '小白兔的开发之路' });
});

/**
 * 导出路由
 */
export default router;
