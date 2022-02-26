import axios from "axios";
import { IPostProjectInfo } from "../interface";

const url = "http://localhost:3000/projects/api";

export const fetchProjects = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((snapshot) => {
        // console.log(snapshot, "snapshot");
        console.log("resolve");

        // console.log(resolve.snapshot)
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
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
