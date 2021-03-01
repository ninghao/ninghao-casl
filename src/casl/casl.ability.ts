import { defineAbility } from '@casl/ability';

export default (user: any) =>
  defineAbility((can, cannot) => {
    can('read', 'Post', { status: 'published' });
    can('update', 'Post', { userId: user.id });
  });
