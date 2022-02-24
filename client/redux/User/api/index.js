import axios from "axios";
// import { LocalStorage } from "node-localstorage";

const API = axios.create({
  baseURL: "http://localhost:3000/user",
});

// axios.interceptors.request.use((request) => {
//   if (localStorage.getItem("userProfile")) {
//     request = `Bearer ${JSON.parse(localStorage.getItem("userProfile")).token}`;
//     // req.headers = "asdasdds";
//     return request;
//   }
// });

// export const logIn = (formData) => {
//   API({
//       method:"post",
//       url: "/user/login",
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
//   }

// export const signUp = (formData) => {
//   API({
//     method: "post",
//     url: "/user/signup",
//     data: {
//       formData
//     },
//     headers: {
//       Authorization: `Bearer ${JSON.parse(localStorage.getItem("userProfile")).token}`,
//     },
//   })
// }

export const logIn = (formData) => API.post("/login", formData);
export const signUp = (formData) => API.post("/signup", formData);
export const findUser = (formData) => API.get("/", formData);

















