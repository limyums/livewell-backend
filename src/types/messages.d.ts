export interface Message {
  message: string;
  image_url: string;
  created_at: Date;
  receiverId?: string;
  senderId?: string;
}
