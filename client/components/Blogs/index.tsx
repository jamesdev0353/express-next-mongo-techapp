import React, { useState } from "react";
import Blog from "./Blog";
import { Grid } from "@mui/material";
import styles from "./../styles/Blog.module.scss";
import { usePostData } from "./../../apis/Posts/api/postsAPI";
import { IPostInfo, IResponseData } from "../../apis/Posts/interface/IPosts";
import styled from "@emotion/styled";
function Blogs() {
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
  console.log(posts);
  return (
    <>
      <Grid container alignItems="stretch" spacing={3} sx={{ mt: 200 }}>
        {posts.map((post: IPostInfo) => (
          <Container key={post._id}>
            <Grid item xs={12} sm={12} sx={{ mt: 200 }} style={divStyle}>
              <Blog />
            </Grid>
          </Container>
        ))}
      </Grid>
    </>
  );
}
const divStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};
export const Container = styled.div<any>((props) => ({
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginBottom: "1rem",
  borderRadius: "10",
}));
export default Blogs;
