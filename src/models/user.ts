import mongoose, { Schema } from "mongoose";
import { User as UserType } from "../types/users";

export const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true,
  },
  isDoctor: {
    type: Boolean,
    required: true,
  },
  messageId: {
    type: [Schema.Types.ObjectId],
    ref: "message",
    required: false,
    default: [],
  },
});

export const LiveUser = mongoose.model<UserType>("liveuser", userSchema);
