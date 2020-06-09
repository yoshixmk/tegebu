export type Event = Readonly<{
  thumbnail: string;
  year: number;
  month: number;
  day: number;
  eventName: string;
  description: string;
}>;

export type Events = Array<Event>;
