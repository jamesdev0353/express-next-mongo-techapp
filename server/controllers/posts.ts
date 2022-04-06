import mongoose from "mongoose";
import { RequestHandler, Response, Request } from "express";
import { IPost } from "../models/interface";
import PostModel from "../models/postModel";
export interface IPostInfoRequest extends Request {
  userId: string; // or any other type
}


export const getPosts: RequestHandler = async (req: Request, res: Response) => {
  try {
    const postModels = await PostModel.find();

    res.status(200).json(postModels);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};
export const createPost: RequestHandler = async (
  req: IPostInfoRequest,
  res
): Promise<void> => {
  const post: IPost = req.body;
  // console.log(post);
  const newPost = new PostModel({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};
export const deletePost = () => {};
export const updatePost = () => {};
