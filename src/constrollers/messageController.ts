import { Request, Response } from "express";
import { Message } from "../models/message";

const createMessage = async (req: Request, res: Response) => {
  const message = await Message.create(req.body);
  res.status(200).json(message);
};

const getMessage = async (req: Request, res: Response) => {
  const message = await Message.find().lean().exec();
  res.status(200).json(message);
};
const getMessageChatbox = async (req: Request, res: Response) => {
  const messages = await Message.find({
    $or: [
      {
        $and: [
          { receiverId: req.params.id },
          { senderId: req.params.selectedId },
        ],
      },
      {
        $and: [
          { receiverId: req.params.selectedId },
          { senderId: req.params.id },
        ],
      },
    ],
  })
    .lean()
    .exec();

  res.status(200).json(messages);
};
const getMessageListById = async (req: Request, res: Response) => {
  const receiverId = req.params.id;
  const senderId = req.params.id;

  const message = await Message.find({
    $or: [{ receiverId }, { senderId }],
  })
    .sort({ created_at: -1 }) // Sort by created_at field in descending order
    .lean()
    .exec();
  res.status(200).json(message);
};

export { createMessage, getMessage, getMessageChatbox, getMessageListById };
