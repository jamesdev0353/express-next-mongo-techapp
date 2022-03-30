import axios from "axios";
import { useQuery } from "react-query";
import { IPostProjectInfo, IResponseData } from "../interface";
import { requestData } from "../utils/axios-utils";

const url = "http://localhost:3000";

axios.interceptors.request.use((req: any) => {
  if (localStorage.getItem("userProfile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userProfile")).token
    }`;
    return req;
  }
});

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

//this works
export const createProject = (newProject: IPostProjectInfo) =>
  axios.post(`${url}/projects/api/`, newProject);

//this works
export const updateProject = (
  currentId: string,
  updatedProject: IPostProjectInfo
) => axios.patch(`${url}/projects/api/${currentId}`, updatedProject);

//this works
export const deleteProject = (id: string) => {
  return axios.delete(`${url}/projects/api/${id}`);
};

export const likeProject = (id: string) =>
  axios.patch(`${url}/likeProject/${id}`);

