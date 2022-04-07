import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/user",
});
axios.interceptors.request.use((req: any) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("userProfile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("userProfile")).token
      }`;
      return req;
    }
  } else {
    console.log("we are running on the server");
  }
});

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
