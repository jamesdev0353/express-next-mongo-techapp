import axios from "axios";
const client = axios.create({ baseURL: "http://localhost:3000" });

export const requestData = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const isLoading = (response: any) => response;
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    return error;
  };

  try {
    const response = await client(options);
    if (isLoading) return isLoading(response);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
