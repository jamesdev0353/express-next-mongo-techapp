export interface IPostsTypes {
  type:
    | "FETCH_ALL_POSTS"
    | "CREATE_POST"
    | "UPDATE_POST"
    | "LIKE_POST"
    | "DELETE_POST";
  payload?: any;
}
