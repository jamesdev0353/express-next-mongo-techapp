import axios from "axios";
import { useQuery } from "react-query";
import { IPostProjectInfo } from "../interface";
import { requestData } from "../utils/axios-utils";

const url = "http://localhost:3000/projects/api";

const fetchProjectData = () => {
  // return axios.get('http://localhost:4000/superheroes')
  return requestData({ url: "/projects/api" });
};

export const useProjectData = (onSuccess: any, onError: any) => {
  return useQuery("projectData", fetchProjectData, {
    onSuccess,
    onError,
    // select: data => {
    //   const superHeroNames = data.data.map(hero => hero.name)
    //   return superHeroNames
    // }
  });
};

// export const fetchProjects = () => axios.get(url);

export const createProject = (newProject: IPostProjectInfo) =>
  axios.post(url, newProject);

export const updateProject = (id: string, updatedProject: any) =>
  axios.patch(`${url}/${id}`, updatedProject);

export const deleteThisProject = (id: string) => axios.delete(`${url}/${id}`);

export const likeProject = (id: string) =>
  axios.patch(`${url}/likeProject/${id}`);
