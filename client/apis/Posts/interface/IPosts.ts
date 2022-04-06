export interface IPostPostInfo {
  title: string;
  description?: string;
  name?: string;
  creator?: string;
  tags: Array<string> | string;
  selectedFile?: string;
  likes?: Array<string>;
  likeList?: Array<string>;
  createdAt?: any;
}
export interface IPost {
  author: string;
  post: string;
  public: boolean;
  title: string;
  selectedFile: string;
  createdAt: any;
  comments: any;
  _id: any;
}
// export type IPost = {

//   title: string;
//   description: string;
//   name: string;
//   creator: string;
//   tags: Array<string>;
//   selectedFile: string;
//   likes: Array<string>;
//   likeList: Array<string>;
//   createdAt: any;
//   _id: string;
//   likeCount: number;
//   currentId: string;
// };

export interface IResponseData extends Response {
  data: IPost[];
}
