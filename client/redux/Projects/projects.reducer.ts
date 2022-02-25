import { IProjectTypes } from "./projects.types";

const INITIAL_STATE = {
  projects: [],
};

const projectsReducer = (state = INITIAL_STATE, action: IProjectTypes) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: action.payload,
      };
    case "DELETE_PROJECT":
      const projectsd = state.projects;
      console.log(projectsd);
      return projectsd.map((project) => project._id !== action.payload);
    case "FETCH_ALL_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "UPDATE_PROJECT":
    case "LIKE_PROJECT":
      const projects = state.projects;
      // console.log(projects, "projects from actions");
      return projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      );
    // const projectsLike = state.projects;
    // console.log(projectsLike, "project like");
    // return projectsLike.map((project) =>
    //   project._id === action.payload._id ? action.payload : project
    // );
    // ...state,
    // projects: action.payload,

    default:
      return state;
  }
};

export default projectsReducer;
