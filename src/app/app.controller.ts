import { Request, Response, NextFunction } from 'express';

/**
 * 应用首页
 */
export const home = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.send({
    message: '宁皓网',
  });
};
