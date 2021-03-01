import { Request, Response, NextFunction } from 'express';
import defineAbilityFor from '../casl/casl.ability';
import { Post } from '../post/post.model';

/**
 * 应用首页
 */
export const home = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const user = { id: 1, isVerified: true };
  const ability = defineAbilityFor(user);
  const post = new Post();
  post.status = 'published';
  const ownPost = new Post();
  ownPost.userId = user.id;
  const postType = post.constructor.name;

  const canReadPost = ability.can('read', post);
  const canUpdatePost = ability.can('update', post);
  const canUpdateOwnPost = ability.can('update', ownPost);
  const canUpdateOwnPostTitle = ability.can('update', ownPost, 'title');
  const canUpdateOwnPostStatus = ability.can('update', ownPost, 'status');

  response.send({
    canReadPost,
    canUpdatePost,
    canUpdateOwnPost,
    canUpdateOwnPostTitle,
    canUpdateOwnPostStatus,
    postType,
  });
};
