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


export interface IResponseData extends Response {
  data: IPostInfo[];
}
