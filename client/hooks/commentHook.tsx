import { useState, useEffect } from "react";
import { useCommentData } from "../apis/Posts/api/postsAPI";
import { useProjectData } from "../apis/Projects/api/projectAPI";

interface IComment {
  _id: string;
  author: string;
  comment: string;
  post: string;
  createdAt: string;
  __v: number;
}
export default function useCommentDataHook(currentId: string) {
  const [comments, setComments] = useState<IComment[]>();
  const [bool, setBool] = useState<boolean>();
  const isLoading = (data: any) => {
    console.log("loading...");
  };

  const onSuccess = (data: any) => {
    setComments(data.data.comments);
    console.log(comments);
    setBool(true);
  };
  const onError = (error: Error) => {
    setBool(false);
  };

  const {} = useCommentData(onSuccess, onError, currentId);
  if (comments) {
    comments.map((comment: IComment) => {});
  }
  return { comments };
}
