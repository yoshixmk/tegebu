export type Member = Readonly<{
  subheading: string;
  memberName: string;
  memberImage: string;
  description: string;
}>;

export type Members = Array<Member>;
