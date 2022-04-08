import mongoose from "mongoose";
import { RequestHandler, Response, Request } from "express";
import { IComment, IPost } from "./interface";
import PostModel from "../models/postModel";
import CommentModel from "../models/comment";
export interface IPostInfoRequest extends Request {
  userId: string; // or any other type
}
export interface ICommentInfoRequest extends Request {
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
export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const postModels = await PostModel.findById(id).populate("comments");
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
export const createComment: RequestHandler = async (
  req: ICommentInfoRequest,
  res
): Promise<void> => {
  const comment: IComment = await req.body;
  const { post } = comment;
  const postBlog = await PostModel.findById(post);
  const newComment = new CommentModel({
    ...comment,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  postBlog.comments.push(newComment);
  try {
    await newComment.save();
    await postBlog.save();
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteComment = () => {};
export const deletePost = () => {};
export const updatePost = () => {};
