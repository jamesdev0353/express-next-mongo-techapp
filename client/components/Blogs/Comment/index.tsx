import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import InputForm from "../../Form/InputForm";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
  const [formData, setFormData] = useState<IComment>(initalState);
  const resetForm = () => {
    setFormData(initalState);
  };
  return (
    <>
      <Typography variant="h6">
        {/* {currentUser ? <p>{currentUser}</p> : <>p</>} */}
      </Typography>
      <InputForm
        label="Comment"
        color="success"
        variant="standard"
        value={formData.comment}
        fullWidth
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />
      <ButtonGroup fullWidth size="large" sx={{ mt: 1.5 }}>
        <Button type="submit" size="large" color="primary">
          add
        </Button>
        <Button color="secondary" size="large" onClick={resetForm} fullWidth>
          clear
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Comment;
