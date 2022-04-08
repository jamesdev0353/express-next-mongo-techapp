import axios from "axios";
import { useQuery } from "react-query";
import Blog from "../../../components/Blogs/Blog";
import { IComment, IPostInfo, IResponseData } from "../interface/IPosts";
import { requestData } from "../utils/axios-utils";

const url = "http://localhost:3000";

// axios.interceptors.request.use((req: any) => {
//   if (localStorage.getItem("userProfile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("userProfile")).token
//     }`;
//     return req;
//   }
// });

//Posts
export const fetchPostData = () => {
  return requestData({ url: "/blog/api" });
};

export const usePostData = (
  onSuccess: (param: IResponseData) => void,
  onError: (param: Error) => void
) => {
  return useQuery("postData", fetchPostData, {
    onSuccess,
    onError,
  });
};

export const createPost = (newpost: IPostInfo) =>
  axios.post(`${url}/blog/api/`, newpost);

//Comments
const fetchCommentData = (id: string) => {
  return requestData({ url: `/blog/api/${id}` });
};
export const useCommentData = (
  onSuccess: (param: IResponseData) => void,
  onError: (param: Error) => void,
  id: string
) => {
  return useQuery("commentData", () => fetchCommentData(id), {
    onSuccess,
    onError,
  });
};

export const createComment = (newComment: IComment, id: string) =>
  axios.post(`${url}/blog/api/${id}/comments`, newComment);

  // export const fetchCommentData = () => {
//   return requestData({ url: `/blog/api/` });
// };

// export const useCommentData = async (
//   onSuccess: (param: IResponseData) => void,
//   onError: (param: Error) => void
// ) => {
//   return useQuery("commentData", await fetchCommentData(), {
//     onSuccess,
//     onError,
//   });
// };

//this works


//this works
// export const deletepost = (id: string) => {
//   return axios.delete(`${url}/blog/api/${id}`);
// };
