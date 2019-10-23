export type Member = {
  subheading: string;
  memberName: string;
  memberImage: string;
  description: string;
  position: 'left' | 'right';
};

export type Members = Array<Member>;
