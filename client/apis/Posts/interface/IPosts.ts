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

export interface IPostInfo extends IPost {
  _id: string;
  tags: Array<string>;
}

export interface IResponseData extends Response {
  data: IPostInfo[];
}
