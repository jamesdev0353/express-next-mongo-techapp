import { IUserTypes } from "./user.types";
import { UAction, IPropsSignUpData } from "./interface/IUser";

const INITIAL_STATE = {
  currentUser: null,
  user: null,
};

const initialState: IPropsSignUpData = {
  userName: "",
  lastName: "",
  email: "",
  birthDay: "",
  password: "",
  confirmPassword: "",
  profilePicture: "",
};

const userReducer = (
  state = INITIAL_STATE || initialState,
  action: UAction | any
) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "GOOGLE_AUTH":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      // console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case "AUTH":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      // console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case "SET_USER":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      // console.log(action?.data, "action data");
      return {
        ...state,
        currentUser: action.payload,
      };
    // case "SET_USER":
    //   localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
    //   // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
    //   console.log(action?.data, "action data");
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //   };

    case "LOG_OUT_USER":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default userReducer;
