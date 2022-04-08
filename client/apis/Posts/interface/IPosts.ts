export interface IPostInfo {
  __v?: number;
  _id?: string;
  author: string;
  comments?: [];
  post: string;
  createdAt?: string;
  public: boolean;
  selectedFile: string;
  title: string;
  name?: string;
}
export interface IComment {
  __v?: number;
  _id?: string;
  post: string;
  author?: string;
  comment: string;
  createdAt?: string;
  name?: string;
}


export interface IResponseData extends Response {
  data: IPostInfo[];
}
