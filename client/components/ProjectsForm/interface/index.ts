export type IProject = {
  title: string;
  description?: string;
  name?: string;
  creator?: string;
  tags: Array<string>;
  selectedFile?: string;
  likes?: Array<string>;
  likeList?: Array<string>;
  createdAt?: any;
};

export interface IProjectInfo extends IProject {
  _id?: string;
  tags: Array<string>;
}
export interface IProps {
  currentId?: any;
  setCurrentId?: any;
}