export interface IProjectTypes {
  type:
    | "FETCH_ALL_PROJECTS"
    | "CREATE_PROJECT"
    | "UPDATE_PROJECT"
    | "LIKE_PROJECT"
    | "DELETE_PROJECT";
  payload?: any;
}
