import mongoose, { Schema } from "mongoose";
import { Message as MessageType } from "../types/messages";

export const messageSchema = new Schema<MessageType>({
  image_url: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "liveuser",
    required: true,
  },
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "liveuser",
    required: true,
  },
});

export const Message = mongoose.model<MessageType>("message", messageSchema);
