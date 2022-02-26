export interface IPostProjectInfo {
  description: string;
  name: string;
  selectedFile: string;
  tags: Array<string>;
  title: string;
}
export type IProject = {
  title: string;
  description: string;
  name: string;
  creator: string;
  tags: Array<string>;
  selectedFile: string;
  likes: Array<string>;
  likeList: Array<string>;
  createdAt: any;
  _id: string;
  likeCount: number;
  currentId: string;
};
