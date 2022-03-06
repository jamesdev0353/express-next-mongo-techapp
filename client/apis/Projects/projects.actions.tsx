import React from "react";
import { IProject, IResponseData } from "./interface";
import * as api from "./api";
import { IPostProjectInfo } from "./interface";
import { IProjectTypes } from "./projects.types";
import { useQuery } from "react-query";

// export const useProjectData = (
//   onSuccess: (param: IResponseData) => void,
//   onError: (param: Error) => void
// ) => {
//   return useQuery("projectData", api.fetchProjectData, {
//     onSuccess,
//     onError,
//   });
// };

export const createProject =
  (project: IPostProjectInfo) =>
  async (dispatch: React.Dispatch<IProjectTypes>) => {
    console.log(project, "project");
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
// function dispatch(
//   arg0: (
//     dispatch: React.Dispatch<
//       import("../../../apis/Projects/projects.types").IProjectTypes
//     >
//   ) => Promise<void>
// ) {
//   throw new Error("Function not implemented.");
// }


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

// export default getProjects;
// export default createProject;
