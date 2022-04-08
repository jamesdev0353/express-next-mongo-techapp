import React, { useEffect, useState } from "react";

import { Typography } from "@material-ui/core";
import InputForm from "../../Form/InputForm";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useDataUserContext from "../../../hooks/dataUserContext";
import { useMutation } from "react-query";
import { createComment } from "../../../apis/Posts/api/postsAPI";

interface IComment {
  author: string;
  comment: string;
  post: string;
}
const initalState: IComment = {
  author: "asd",
  comment: "",
  post: "",
};

const CommentForm = ({ blogId }) => {
  const useDispatchCreateComment = useMutation((myCommentData: IComment) => {
    return createComment(myCommentData, myCommentData.post);
  });
  const { userContextData } = useDataUserContext();
  const [formData, setFormData] = useState<IComment>({
    ...initalState,
    post: blogId,
  });

  const resetForm = () => {
    setFormData(initalState);
  };
  const handleSubmit = (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();
    const myCommentData: IComment = {
      ...formData,
    };
    useDispatchCreateComment.mutate(myCommentData);
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

export default CommentForm;
