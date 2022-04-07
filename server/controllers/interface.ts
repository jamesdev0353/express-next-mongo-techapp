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
export interface IPost {
  author: string;
  title: string;
  message: string;
  public: boolean;
  selectedFile: string;
  createdAt: any;
  comments: any;
}
export interface IUser {
  name: string;
  email: string;
  birthDay: string;
  password: string;
  _v: number;
  _id: string;
  profilePicture: string;
}
