import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { createProject } from "../api";

const client = axios.create({ baseURL: "http://localhost:3000" });

export const requestData = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};

