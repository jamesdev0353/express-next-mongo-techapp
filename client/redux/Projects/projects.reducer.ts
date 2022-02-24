import projectTypes from "./projects.types";

const INITIAL_STATE = {
  projects: [],
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectTypes.CREATE_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case projectTypes.DELETE_PROJECT:
      const projectsd = state.projectsd;
      console.log(projectsd);
      return projectsd.map((project) => project._id !== action.payload);
    case projectTypes.FETCH_ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case projectTypes.UPDATE_PROJECT:
    case projectTypes.LIKE_PROJECT:
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
