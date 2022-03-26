import React, { useReducer, useState } from "react";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";
import { Box } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { GoogleLogin } from "react-google-login";
import { Button } from "@mui/material";
import useStyles from "./styles";
import { useRouter } from "next/router";
import Icon from "./icon";
import styles from "./../styles/Form.module.scss";
import userReducer from "../../apis/User/user.reducers";
import { logInAction } from "../../apis/User/user.actions";
import { ResultOptions } from "react-query";
import * as api from "./../../apis/User/api";
import { AxiosResponse } from "axios";

const initialState = {
  email: "",
  password: "",
};

interface IGoogleUserProps {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

function LoginForm(): JSX.Element {
  const router = useRouter();
  const classes = useStyles();
  const [data, setData] = useState<any>();
  const [formData, setFormData] = useState(initialState);
  const [INITIAL_STATE, dispatch] = useReducer(userReducer, data);
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
  const googleFailure = (error: Error) => {
    console.log(error);
    console.log("Google sign in unsuccessful");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();
    console.log(formData, "login");
    try {
      await api.logIn(formData).then(async (res: AxiosResponse<any, any>) => {
        const result: any = await res?.data.result;
        const token: string = await res?.data.token;
        dispatch({ type: "AUTH", data: { result, token } });
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
