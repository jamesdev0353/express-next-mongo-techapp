import { IUserTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  user: null,
};
interface IGoogleUserProps {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

interface IPropData {
  result?: IGoogleUserProps;
  token?: string;
}
interface Action {
  payload?: IPropData;
  type:
    | "AUTH"
    | "SET_USER"
    | "CREATE_USER"
    | "LOG_IN_USER"
    | "LOG_OUT_USER"
    | "GOOGLE_AUTH";
  data: IPropData;
}
interface IPropsSignUpData {
  userName: string;
  lastName: string;
  email: string;
  birthDay: string;
  password: string;
  confirmPassword: string;
}

const initialState: IPropsSignUpData = {
  userName: "",
  lastName: "",
  email: "",
  birthDay: "",
  password: "",
  confirmPassword: "",
};

const userReducer = (state = INITIAL_STATE || initialState, action: Action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "GOOGLE_AUTH":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case "AUTH":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case "SET_USER":
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "action data");
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
