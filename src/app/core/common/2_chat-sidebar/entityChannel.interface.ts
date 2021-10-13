import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
export interface EntityChannel {
  id: number,
  name: string,
  message: Message
}
