import React from "react";
import { IProject } from "./interface";
import * as api from "./api";
import { IPostProjectInfo } from "./interface";
import { IProjectTypes } from "./projects.types";
import axios from "axios";
import { useMutation } from "react-query";

// const getProjects = () => async (dispatch: React.Dispatch<IProjectTypes>) => {
//   try {
//     const { data }: any = await api.fetchProjects();
//     console.log(data, "oops");
//     dispatch({ type: "FETCH_ALL_PROJECTS", payload: data });
//   } catch (error) {
//     console.log(error, "get  error");
//   }
// };

// export const useDipsatchCreateProject =
//   (myProjectData: IPostProjectInfo) =>
//   async (dispatch: React.Dispatch<IProjectTypes>) => {
//     useMutation((myProjectData: IProject) => {
//     return axios.post(`http://localhost:3000/projects/api/`, myProjectData);
//   });

// export const updatedProject =
//   (id: string, project: IProject) =>
//   async (dispatch: React.Dispatch<IProjectTypes>) => {
//     try {
//       const { data } = await api.updateProject(id, project);

//       dispatch({ type: "UPDATE_PROJECT", payload: data });
//     } catch (error) {
//       console.log(error, "updated error");
//     }
//   };

// export const deleteProject =
//   (id: string) => async (dispatch: React.Dispatch<IProjectTypes>) => {
//     try {
//       await api.deleteThisProject(id);
//       dispatch({ type: "DELETE_PROJECT", payload: id });
//     } catch (error) {
//       console.log(error, " error /actions");
//     }
//   };

// export const likeProject =
//   (id: string) => async (dispatch: React.Dispatch<IProjectTypes>) => {
//     try {
//       const { data } = await api.likeProject(id);
//       console.log(JSON.stringify(data), "actions");
//       dispatch({ type: "LIKE_PROJECT", payload: data });
//     } catch (error) {
//       console.log(error, "updated error");
//     }
//   };

// export default getProjects;
// export default createProject;