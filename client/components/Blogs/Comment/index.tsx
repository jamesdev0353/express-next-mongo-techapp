import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import InputForm from "../../Form/InputForm";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useDataUserContext from "../../../hooks/dataUserContext";

interface IComment {
  author: string;
  comment: string;
  createdAt: any;
}
const initalState: IComment = {
  author: "",
  comment: "",
  createdAt: "",
};

const Comment = () => {
  const { userContextData } = useDataUserContext();
  const [formData, setFormData] = useState<IComment>(initalState);
  const resetForm = () => {
    setFormData(initalState);
  };
  const handleSubmit = (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">
          {/* {currentUser ? <p>{currentUser}</p> : <>p</>} */}
        </Typography>
        <InputForm
          label="Comment"
          color="success"
          variant="standard"
          value={formData.comment}
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({
              ...formData,
              comment: e.target.value,
              author: userContextData.userName,
            })
          }
        />
        <ButtonGroup fullWidth size="large" sx={{ mt: 1.5 }}>
          <Button type="submit" size="large" color="primary">
            add
          </Button>
          <Button color="secondary" size="large" onClick={resetForm} fullWidth>
            clear
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Comment;
