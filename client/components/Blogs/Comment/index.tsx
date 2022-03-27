import React from "react";

import { Typography } from "@material-ui/core";
import InputForm from "../../Form/InputForm";

const Comment = () => {
  return (
    <>
      <Typography variant="h6">
        {/* {currentUser ? <p>{currentUser}</p> : <>p</>} */}
      </Typography>
      <InputForm
        label="Comment"
        color="success"
        variant="standard"
        // value={postData.title}
        fullWidth
        // onChange={}
      />
    </>
  );
};

export default Comment;
