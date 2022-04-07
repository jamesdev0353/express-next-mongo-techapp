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
  title: string;
  author: string;
  creator: string;
  post: string;
  public: boolean;
  selectedFile: string;
  createdAt: any;
  comments: any;
}

export interface IComment {
  author: string;
  comment: string;
  createdAt: any;
}

export interface IUser {
  name: string;
  email: string;
  birthDay: string;
  password: string;
  id: string;
  profilePicture: string;
}
