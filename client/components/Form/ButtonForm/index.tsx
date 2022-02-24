import React from "react";
import Button from "@mui/material/Button";
// import styles from "./../styles/Form.module.scss";

function ButtonForm({ children, ...otherProps }) {
  return (
    <div>
      <Button {...otherProps}>{children}</Button>
    </div>
  );
}

export default ButtonForm;
