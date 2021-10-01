export interface Message {
  id: number;
  avatar?: string;
  name: string;
  time: string;
  text: any;
}

export interface Date {
  id: number;
  dayWeek: string;
  month: string;
  year?: number;
  dayMonth: number;
}

export interface Channel {
  id: number;
  title: string;
}

export interface Favorites {
  selected: boolean;
}

