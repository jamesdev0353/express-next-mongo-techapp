import React from "react";
import { TextField } from "@mui/material";
import { style } from "@mui/system";
// import styles from "./../../styles/Form.module.scss";

const styles = (theme) => ({
  multilineColor: {
    color: "red",
  },
});

const InputForm = ({ ...otherProps }) => {
  return (
    <div>
      <TextField {...otherProps} />
    </div>
  );
};

export default InputForm;
