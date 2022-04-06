export interface IPostInfo {
  __v: number;
  _id: string;
  author: string;
  comments: [];
  post: string;
  createdAt: string;
  public: boolean;
  selectedFile: string;
  title: string;
}
export interface IResponseData extends Response {
  data: IPostInfo[];
}
export type IPostData = {
  data: IPostInfo;
};

// __v: 0
// _id: "624dce715b1384c3b67431ee"
// author: " asd"
// comments: Array []
// createdAt: "2022-04-06T17:31:29.522Z"
// post: "asdforq=?"
// public: true
// selectedFile:
