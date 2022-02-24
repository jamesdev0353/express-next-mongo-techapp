import userTypes from "./user.types";
import * as api from "./api/index.js";

export const signUpAction = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data, "data");
    dispatch({ type: userTypes.AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const setUserAction = (formData) => async (dispatch) => {
  try {
    const { data } = { ...formData };
    console.log({ ...formData }, "actions-formData");
    console.log(JSON.parse(localStorage.getItem("userProfile")), "actions");
    dispatch({ type: userTypes.SET_USER, payload: { ...formData } });
    console.log(
      JSON.parse(localStorage.getItem("userProfile")).token,
      "actions"
    );
    console.log(data, "actions");
  } catch (error) {
    console.log(error);
  }
};

export const logInAction = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    console.log(data, "data actions");
    dispatch({ type: userTypes.AUTH, data });
    // console.log(localStorage.getItem("userProfile"), "actions");
    // console.log(
    //   JSON.parse(localStorage.getItem("userProfile")).token,
    //   "actions"
    // );
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
