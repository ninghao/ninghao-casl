import { Request, Response, NextFunction } from 'express';
import ability from '../casl/casl.ability';

/**
 * 应用首页
 */
export const home = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const canReadPost = ability.can('read', 'Post');
  const canDeleteComment = ability.can('delete', 'Comment');
  const canDeleteUser = ability.can('delete', 'User');

  response.send({
    canReadPost,
    canDeleteComment,
    canDeleteUser,
  });
};
