import React, { useReducer, useState, useContext } from "react";
import { LoginContext } from "../Contexts";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";
import { Box } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { GoogleLogin } from "react-google-login";
import useStyles from "./styles";
import { useRouter } from "next/router";
import Icon from "./icon";
import styles from "./../styles/Form.module.scss";
import userReducer from "../../apis/User/user.reducers";
import * as api from "./../../apis/User/api";
import { AxiosResponse } from "axios";
import { IGoogleUserProps, IUserProps, IPropData } from "./interface";

const initialState = {
  email: "",
  password: "",
};

function LoginForm(): JSX.Element {
  const router = useRouter();
  const classes = useStyles();
  const [data, setData] = useState<any>();
  const [formData, setFormData] = useState(initialState);
  const [INITIAL_STATE, dispatch] = useReducer(userReducer, data);

  const context: any = useContext(LoginContext);
  const { userContextData, setUserContextData } = context;
  const googleSuccess = async (res: any) => {
    const result: IGoogleUserProps = await res?.profileObj;
    const token: string = await res?.tokenId;
    setData({ result, token });
    try {
      dispatch({ type: "GOOGLE_AUTH", data: { result, token } });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  //
  const googleFailure = (error: Error) => {
    console.log(error);
    console.log("Google sign in unsuccessful");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();
    try {
      await api.logIn(formData).then(async (res: AxiosResponse<any, any>) => {
        const result: IUserProps = await res?.data.result;
        const token: string = await res?.data.token;
        dispatch({ type: "AUTH", data: { result, token } });
        setUserContextData({
          ...userContextData,
          userName: res?.data.result.name,
          userEmail: res?.data.result.email,
          userId: res?.data.result._id,
        });
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.signUpform}>
      <InputForm
        label="email"
        type="email"
        name="email"
        placeholder="example@email.com"
        variant="standard"
        autoFocus
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <InputForm
        label="password"
        type="password"
        name="password"
        variant="standard"
        color="secondary"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <Box component="div">
        <ButtonForm
          className={styles.buttonBox}
          startIcon={<LockOpenIcon />}
          variant="outlined"
          color="success"
          type="submit"
          sx={{ width: 200 }}
        >
          Log in
        </ButtonForm>
      </Box>
      <GoogleLogin
        clientId="131233728657-0h9g8a4fo65r7l3ous5skvdtcth8ddv3.apps.googleusercontent.com"
        render={(renderProps) => (
          <ButtonForm
            className={classes.googleButton}
            color="primary"
            fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon={<Icon />}
            vaiant="contained"
          >
            {" "}
            Google Log in
          </ButtonForm>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </form>
  );
}

export default LoginForm;
const dispatch = (arg0: (dispatch: any) => Promise<void>) => {};
