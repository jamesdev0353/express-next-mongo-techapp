import { IPostsTypes } from "./posts.types";

const INITIAL_STATE = {
  posts: [],
};

const postsReducer = (state = INITIAL_STATE, action: IPostsTypes) => {
  switch (action.type) {
    case "CREATE_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "DELETE_POST":
      const postsd = state.posts;
      return postsd.map((post) => post._id !== action.payload);
    case "FETCH_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "UPDATE_POST":
    case "LIKE_POST":
      const posts = state.posts;
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};

export default postsReducer;
