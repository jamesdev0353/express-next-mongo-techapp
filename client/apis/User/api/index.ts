import axios from "axios";
import { LocalStorage } from "node-localstorage";

const API = axios.create({
  baseURL: "http://localhost:3000/user",
});

axios.interceptors.request.use((req: any) => {
  if (localStorage.getItem("userProfile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userProfile")).token
    }`;
    // req.headers = "asdasdds";
    return req;
  }
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.req;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = `Bearer ${
        JSON.parse(localStorage.getItem("userProfile")).token
      }`;
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
// API.interceptors.request.use(async (config) => {
//   if (localStorage.getItem("userProfile")) {
//     const value = await localStorage.getItem("userProfile");
//     const keys = JSON.parse(value);
//     config.headers = {
//       Authorization: `Bearer ${keys.access_token}`,
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded",
//     };
//     return config;
//   }
//   (error) => {
//     Promise.reject(error);
//   };
// });

export const findUser = (formData) => API.get("/", formData);
export const logIn = (formData) => API.post("/login", formData);
export const signUp = (formData) => API.post("/signup", formData);
// export const logIn = (formData) => {
//   console.log(formData, "loginAccept");
//   try {
//     API({
//       method: "post",
//       url: "/login",
//       data: {
//         formData,
//       },
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${
//           JSON.parse(localStorage.getItem("userProfile")).token
//         }`,
//       },
//     });
//   } catch (error) {
//     console.log(error, "is error");
//   }
// };

// export const signUp = (formData) => {
//   API({
//     method: "post",
//     url: "/user/signup",
//     data: {
//       formData,
//     },
//     headers: {
//       Authorization: `Bearer ${
//         JSON.parse(localStorage.getItem("userProfile")).token
//       }`,
//     },
//   });
// };

// export const logIn = (formData) => API.post("/login", formData);
