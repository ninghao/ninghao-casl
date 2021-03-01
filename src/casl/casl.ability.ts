import { Ability } from '@casl/ability';

export default (user: any) => {
  const rules = [
    {
      action: 'read',
      subject: 'Post',
    },
    {
      action: 'update',
      subject: 'Post',
      fields: ['title'],
      conditions: { userId: user.id },
    },
  ];

  if (user.isVerified) {
    rules.push({
      action: 'update',
      subject: 'Post',
      fields: ['status'],
      conditions: { userId: user.id },
    });
  }

  return new Ability(rules);
};
