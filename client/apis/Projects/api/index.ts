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

const deleteProject = (id: string) => {
  return axios.delete(`${url}/${id}`);
};

export const useDispatchDeleteProject = (

) => {
  return useMutation(deleteProject, {
  });
};

export const createProject = (newProject: IPostProjectInfo) =>
  axios.post(`${url}/project/api`, newProject);


export const useAddProject = () => {
  const queryClient = useQueryClient();

  return useMutation(createProject, {
    onSuccess: async data => {
      console.log(data);
      const message = "success"
      alert(message)

    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  })
}
// return axios.delete(`http://localhost:3000/projects/api/${id}`);






export const updateProject = (id: string, updatedProject: any) =>
  axios.patch(`${url}/${id}`, updatedProject);

// export const deleteThisProject = (id: string) => axios.delete(`${url}/${id}`);

export const likeProject = (id: string) =>
  axios.patch(`${url}/likeProject/${id}`);
