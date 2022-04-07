export interface IPostInfo {
  author: string;
  post: string;
  public: boolean;
  title: string;
  selectedFile: string;
  createdAt: any;
  comments: any;
  _id: any;
}
export interface IResponseData extends Response {
  data: IPostInfo[];
}
