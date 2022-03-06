import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { IPostProjectInfo, IResponseData } from "../interface";
import { requestData } from "../utils/axios-utils";

const url = "http://localhost:3000";

const fetchProjectData = () => {
  return requestData({ url: "/projects/api" });
};

export const useProjectData = (
  onSuccess: (param: IResponseData) => void,
  onError: (param: Error) => void
) => {
  return useQuery("projectData", fetchProjectData, {
    onSuccess,
    onError,
  });
};



export const createProject = (newProject: IPostProjectInfo) =>
  axios.post(`${url}/project/api`, newProject);

const deleteProject = (id: string) => {
  return axios.delete(`${url}/${id}`);
};

export const useDispatchDeleteProject = () => {
  return useMutation(deleteProject, {});
};

// return axios.delete(`http://localhost:3000/projects/api/${id}`);






export const updateProject = (id: string, updatedProject: any) =>
  axios.patch(`${url}/${id}`, updatedProject);

// export const deleteThisProject = (id: string) => axios.delete(`${url}/${id}`);

export const likeProject = (id: string) =>
  axios.patch(`${url}/likeProject/${id}`);
