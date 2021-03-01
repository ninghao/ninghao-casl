import { AbilityBuilder, Ability } from '@casl/ability';

export default (user: any) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  can('read', 'Post', { status: 'published' });
  can('update', 'Post', ['title'], { userId: user.id });

  if (user.isVerified) {
    can('update', 'Post', ['status'], { userId: user.id });
  }

  return build();
};
