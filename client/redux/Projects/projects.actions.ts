import * as api from "./api";
import projectTypes from "./projects.types";

const getProjects = () => async (dispatch) => {
  try {
    const { data }: any = await api.fetchProjects();
    console.log(data, "oops");
    dispatch({ type: projectTypes.FETCH_ALL_PROJECTS, payload: data });
  } catch (error) {
    console.log(error, "get  error");
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    console.log(data, "data");
    dispatch({ type: projectTypes.CREATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error, "created error");
  }
};

export const updatedProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: projectTypes.UPDATE_PROJECT, payload: data });
  } catch (error) {
    console.log(error, "updated error");
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteThisProject(id);
    dispatch({ type: projectTypes.DELETE_PROJECT, payload: id });
  } catch (error) {
    console.log(error, " error /actions");
  }
};

export const likeProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProject(id);
    console.log(JSON.stringify(data), "actions");
    dispatch({ type: projectTypes.LIKE_PROJECT, payload: data });
  } catch (error) {
    console.log(error, "updated error");
  }
};

export default getProjects;
// export default createProject;
