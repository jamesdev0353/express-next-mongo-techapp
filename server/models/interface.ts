export interface IProject {
  title: string;
  description: string;
  name: string;
  creator: string;
  tags: Array<string>;
  selectedFile: string;
  likes: Array<string>;
  likeList: Array<string>;
  createdAt: any;
}
export interface IUser {
  name: string;
  email: string;
  birthDay: string;
  password: string;
  id: string;
}
