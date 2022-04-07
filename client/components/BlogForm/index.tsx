import React, { useState, useEffect, useContext } from "react";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FileBase from "react-file-base64";

import { Typography } from "@mui/material";

import InputForm from "./../Form/InputForm";
import styles from "./../styles/Blog.module.scss";
import { useMutation } from "react-query";
import { createPost } from "../../apis/Posts/api/postsAPI";
import useDataUserContext from "../../hooks/dataUserContext";
import { IPostInfo } from "../Blogs/interface";
// import styles from './../styles/Blog.module.scss'

const initialState: IPostInfo = {
  title: "",
  post: "",
  author: "",
  selectedFile: "",
  public: true,
};

function BlogForm(props: any): JSX.Element {
  const useDipsatchCreatePost = useMutation((myPostData: IPostInfo) => {
    return createPost(myPostData);
  });
  const { userContextData } = useDataUserContext();

  const [postData, setPostData] = useState<IPostInfo>(initialState);
  const resetForm = () => {
    setPostData(initialState);
  };

  const handleSubmit = async (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();

    setPostData({ ...postData, author: `${userContextData.userName}` });
    const myPostData: IPostInfo = {
      ...postData,
      name: userContextData.userId,
    };
    useDipsatchCreatePost.mutate(myPostData);
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
        {userContextData.userName ? <p>{userContextData.userName}</p> : <></>}
      </Typography>
      <InputForm
        label="Title"
        color="success"
        variant="standard"
        value={postData.title}
        fullWidth
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPostData({
            ...postData,
            title: e.target.value,
            author: userContextData.userName,
          })
        }
      />
      <InputForm
        id="outlined-multiline-static"
        label="Post"
        multiline
        value={postData.post}
        rows={4}
        fullWidth
        sx={{ mt: 1.5 }}
        placeholder="write your post here.."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPostData({ ...postData, post: e.target.value })
        }
      />
      <div className={styles.filebase}>
        <FileBase
          type="file"
          multiple={false}
          fullWidth
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div>
      <ButtonGroup fullWidth size="large" sx={{ mt: 1.5 }}>
        <Button type="submit" size="large" color="primary">
          add
        </Button>
        <Button color="secondary" size="large" onClick={resetForm} fullWidth>
          clear
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default BlogForm;
