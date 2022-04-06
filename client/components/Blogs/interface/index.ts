interface IPostInfo {
  _id: string;
  author: string;
  post: string;
  public: boolean;
  selectedFile: string;
  comments: [];
  createdAt: string;
  __v: number;
}
export interface IResponseData extends Response {
  data: IPostInfo[];
}
