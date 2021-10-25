export interface User {
  id: number;
  name: string;
  profession?: string;
  social?: string;
  username: string;
  email?: string;
  skype?: string;
  timezone: string;
  photo?: string;
  friend: boolean;
  online: boolean;
}
