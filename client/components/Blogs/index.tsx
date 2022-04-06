import React, { useState } from "react";
import Blog from "./Blog";
import { Grid } from "@mui/material";
import styles from "./../styles/Blog.module.scss";
import { usePostData } from "./../../apis/Posts/api/postsAPI";
import { IPostInfo, IResponseData } from "./interface";
import styled from "@emotion/styled";
function Blogs(props: any) {
  const [bool, setBool] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPostInfo[]>([]);
  const onSuccess = (data: IResponseData) => {
    setPosts(data.data);
    setBool(true);
  };
  const onError = (error: Error) => {
    setBool(false);
  };
  posts.map((post) => {
    console.log(post);
  });
  const {} = usePostData(onSuccess, onError);
  return (
    <Grid container alignItems="stretch" spacing={3} sx={{ mt: 200 }}>
      {posts.map((post: IPostInfo) => (
        <Grid style={divStyle} item xs={12} sm={12} key={post._id}>
          <Blog blog={post} />
        </Grid>
      ))}
    </Grid>
  );
}

const divStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginBottom: "100px",
  borderRadius: "10px",
};
export const Container = styled.div<any>((props) => ({
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginBottom: "1rem",
  borderRadius: "10",
}));
export default Blogs;
