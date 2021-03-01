import { defineAbility } from '@casl/ability';

export default (user: any) =>
  defineAbility((can, cannot) => {
    can('read', 'Post', { status: 'published' });
    can('update', 'Post', ['title'], { userId: user.id });

    if (user.isVerified) {
      can('update', 'Post', ['status'], { userId: user.id });
    }
  });
