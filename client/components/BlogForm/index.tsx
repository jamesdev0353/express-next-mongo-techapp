import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import ButtonGroup from "@mui/material/ButtonGroup";
import FileBase from "react-file-base64";

import { Typography } from "@mui/material";

import ButtonForm from "./../Form/ButtonForm";
import InputForm from "./../Form/InputForm";
import styles from "./../styles/Blog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { LoginContext } from "../Contexts";

// import styles from './../styles/Blog.module.scss'

function BlogForm(props: any) {
  const [currentUser, setCurrentUser] = useState("");

  const context: any = useContext(LoginContext);
  const { userContextData, setUserContextData } = context;
  const { userName, userId, userEmail } = userContextData;

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    author: "",
    selectedFile: "",
    public: true,
  });

  const resetForm = () => {
    setPostData({
      title: "",
      message: "",
      author: "",
      selectedFile: "",
      public: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPostData({ ...postData, author: `${userName}` });
    console.log(postData);
    resetForm();
  };

  const handleChange = () => {
    setPostData({ ...postData, public: !postData.public });
  };

  return (
    <form className={styles.containerForm} onSubmit={handleSubmit}>
      <div>
        <Switch checked={postData.public} onChange={handleChange} />
        {postData.public ? "Public" : "Private"}
      </div>
      <Typography variant="h6">
        {currentUser ? <p>{userName}</p> : <>p</>}
      </Typography>
      <InputForm
        label="Title"
        color="success"
        variant="standard"
        value={postData.title}
        fullWidth
        onChange={(e) =>
          setPostData({
            ...postData,
            title: e.target.value,
            author: userName,
          })
        }
      />
      <InputForm
        id="outlined-multiline-static"
        label="Message"
        multiline
        value={postData.message}
        rows={4}
        fullWidth
        sx={{ mt: 1.5 }}
        placeholder="write your message here.."
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />
      <div className={styles.filebase}>
        <FileBase
          type="file"
          multiple={false}
          // onDone={({ base64 }) => setFile(base64)}
          fullWidth
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div>
      <ButtonGroup
        // className={styles}
        fullWidth
        size="large"
        sx={{ mt: 1.5 }}
      >
        <Button
          // className={styles.btnProjectForm}
          // sx={{ mt: 1.5 }}
          //   startIcon={<SaveIcon />}
          type="submit"
          size="large"
          color="primary"
          // style={{ width: 50 }}
        >
          add
        </Button>
        <Button
          //   startIcon={<BackspaceIcon />}
          // className={styles.btnProjectForm}
          // sx={{ mt: 1.5 }}
          color="secondary"
          size="large"
          onClick={resetForm}
          fullWidth
        >
          clear
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default BlogForm;
