import { Request, Response, NextFunction } from 'express';
import ability from '../casl/casl.ability';
import { Post } from '../post/post.model';

/**
 * 应用首页
 */
export const home = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const post = new Post();
  const postType = post.constructor.name;
  const canReadPost = ability.can('read', post);

  response.send({
    canReadPost,
    postType,
  });
};
