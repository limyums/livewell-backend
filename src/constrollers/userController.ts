import { Request, Response } from "express";
import { LiveUser } from "../models/user";

const createUser = async (req: Request, res: Response) => {
  const user = await LiveUser.create(req.body);
  res.status(200).json(user);
};

const getUsers = async (req: Request, res: Response) => {
  const users = await LiveUser.find().lean().exec();
  const sendData = users.map((user) => {
    return {
      id: user._id.toString(),
      avatar_url: user.avatar_url,
      isDoctor: user.isDoctor,
      name: user.name,
    };
  });
  res.status(200).json(sendData);
};
const getUserById = async (req: Request, res: Response) => {
  const users = await LiveUser.find(req.params).lean().exec();
  res.status(200).json(users);
};

export { createUser, getUsers, getUserById };
