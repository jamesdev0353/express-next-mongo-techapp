import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { createProject } from "../api";

const client = axios.create({ baseURL: "http://localhost:3000" });

export const requestData = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    return error;
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

