import userTypes from "./user.types";


const INITIAL_STATE = {
  currentUser: null,
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.AUTH:
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "action data");
      return { ...state, currentUser: action?.data };
    case userTypes.SET_USER:
      // localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "action data");
      return {
        ...state,
        currentUser: action.payload,
      };

    case userTypes.LOG_OUT_USER:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default userReducer;
