import React, { useCallback, useEffect, useReducer, useState } from "react";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import { Button } from "@mui/material";
import FileBase from "react-file-base64";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FormControl from "@mui/material/FormControl";
import useStyles from "./styles";
import styles from "./../styles/Form.module.scss";
import { useRouter } from "next/router";
import { signUpAction } from "../../apis/User/user.actions";
import userReducer from "../../apis/User/user.reducers";
import * as api from "./../../apis/User/api";
import Profile from "./Profile";
import { useQuery } from "react-query";
const initialState = {
  userName: "",
  lastName: "",
  email: "",
  birthDay: "",
  password: "",
  confirmPassword: "",
  profilePicture: "",
};
const fetchCharacters = async (page: number) => {
  const promise = await fetch(
    `https://rickandmortyapi.com/api/character/${page}`
  ).then((res) => {
    return res.json();
  });

  return promise;
};

function SignUpForm() {
  const router = useRouter();
  const classes = useStyles();
  const [dataForm, setDataForm] = useState<any>();
  const [formData, setFormData] = useState(initialState);
  const [INITIAL_STATE, dispatch] = useReducer(userReducer, formData);

  const handleSubmit = async (e: React.SyntheticEvent | React.FormEvent) => {
    if (!formData.profilePicture) {
      setFormData({ ...formData, profilePicture: data.image });
      setFormData({ ...formData, profilePicture: data.image });
    }
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log(formData);
      try {
        // const { data } = await api.signUp(formData);
        // dispatch({ type: "AUTH", data });
        // router.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("password is not the same");
    }
  };
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );
  const resetForm = () => {
    setFormData(initialState);
    if (!formData.profilePicture) {
      setFormData({ ...formData, profilePicture: data.image });
    }
    console.log("DirectionsCarRounded", formData);
  };

  const googleSuccess = async (res: any) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      //   .then(
      //   router.push("/")
      // );
    } catch (error) {
      console.log(error);
    }
    // console.log(res);
  };
  const googleFailure = (error: Error) => {
    console.log(error);
    console.log("Google sign in unsuccessful");
  };

  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useQuery(["profile", page], () =>
    fetchCharacters(page)
  );
  const increasePage = () => {
    setPage(page + 1);
    setFormData({ ...formData, profilePicture: data.image });
  };
  const decrasePage = () => {
    setPage(page - 1);
    setFormData({ ...formData, profilePicture: data.image });
  };

  return (
    <>
      <div>
        {isLoading ? (
          "Loading.."
        ) : (
          <Profile
            name={data.name}
            image={
              formData.profilePicture ? formData.profilePicture : data.image
            }
          />
        )}
      </div>
      <Button color="success" onClick={increasePage}>
        Next Character
      </Button>
      <Button color="error" onClick={decrasePage}>
        Previous Character
      </Button>
      <form onSubmit={handleSubmit} className={styles.signUpform}>
        <FormControl variant="standard">
          <div className={styles.filebase}>
            <FileBase
              type="file"
              multiple={false}
              name="profilePicture"
              fullWidth
              value={formData.profilePicture}
              onDone={({ base64 }) =>
                setFormData({ ...formData, profilePicture: base64 })
              }
            />
            <Button color="error" onClick={resetForm}>
              discard
            </Button>
          </div>
          <InputForm
            label="Username"
            name="userName"
            color="success"
            placeholder="First Name"
            variant="standard"
            value={formData.userName}
            autoFocus
            sx={{ width: 200, input: { color: "white" } }}
            onChange={handleChange}
          />
        </FormControl>
        <InputForm
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          color="success"
          variant="standard"
          value={formData.lastName}
          sx={{ width: 200, input: { color: "white" } }}
          onChange={handleChange}
        />
        <InputForm
          label="email"
          type="email"
          name="email"
          placeholder="example@email.com"
          variant="standard"
          value={formData.email}
          sx={{ width: 200, input: { color: "white" } }}
          onChange={handleChange}
        />
        <InputForm
          type="date"
          label="BirthDay"
          variant="standard"
          name="birthDay"
          value={formData.birthDay}
          sx={{ width: 200, input: { color: "white" } }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <InputForm
          label="password"
          type="password"
          variant="standard"
          value={formData.password}
          placeholder="password"
          name="password"
          color="secondary"
          sx={{ width: 200, input: { color: "white" } }}
          onChange={handleChange}
        />
        <InputForm
          type="password"
          label="confirm password"
          variant="standard"
          value={formData.confirmPassword}
          sx={{ width: 200, input: { color: "white" } }}
          placeholder="confirm password"
          name="confirmPassword"
          color="secondary"
          onChange={handleChange}
        />
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
              Google Sign in
            </ButtonForm>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <ButtonForm
          className={styles.buttonBox}
          startIcon={<LockOpenIcon />}
          variant="outlined"
          color="success"
          type="submit"
          sx={{ width: 200, input: { color: "white" } }}
        >
          Sign Up
        </ButtonForm>
      </form>
    </>
  );
}

export default SignUpForm;
