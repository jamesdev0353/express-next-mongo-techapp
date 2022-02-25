import React from "react";
import { IProject } from "../../components/Projects/interface";
import * as api from "./api";
import { IProjectTypes } from "./projects.types";

const getProjects = () => async (dispatch: React.Dispatch<IProjectTypes>) => {
  try {
    const { data }: any = await api.fetchProjects();
    console.log(data, "oops");
    dispatch({ type: "FETCH_ALL_PROJECTS", payload: data });
  } catch (error) {
    console.log(error, "get  error");
  }
};

export const createProject =
  (project: any) => async (dispatch: React.Dispatch<IProjectTypes>) => {
    try {
      const { data } = await api.createProject(project);

      console.log(data, "data");
      dispatch({ type: "CREATE_PROJECT", payload: data });
    } catch (error) {
      console.log(error, "created error");
    }
  };

export const updatedProject =
  (id: string, project: IProject) =>
  async (dispatch: React.Dispatch<IProjectTypes>) => {
    try {
      const { data } = await api.updateProject(id, project);

      dispatch({ type: "UPDATE_PROJECT", payload: data });
    } catch (error) {
      console.log(error, "updated error");
    }
  };

export const deleteProject =
  (id: string) => async (dispatch: React.Dispatch<IProjectTypes>) => {
    try {
      await api.deleteThisProject(id);
      dispatch({ type: "DELETE_PROJECT", payload: id });
    } catch (error) {
      console.log(error, " error /actions");
    }
  };

export const likeProject =
  (id: string) => async (dispatch: React.Dispatch<IProjectTypes>) => {
    try {
      const { data } = await api.likeProject(id);
      console.log(JSON.stringify(data), "actions");
      dispatch({ type: "LIKE_PROJECT", payload: data });
    } catch (error) {
      console.log(error, "updated error");
    }
  };

export default getProjects;
// export default createProject;
