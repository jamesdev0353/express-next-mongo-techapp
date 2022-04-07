import React from "react";
import {
  Container,
  Divider,
  Avatar,
  Paper,
  Typography,
} from "@material-ui/core";
import { Grid } from "@mui/material";
import Comment from "../Comment";

import styles from "./../../styles/Blog.module.scss";
import { IPostData, IPostInfo } from "../interface";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Blog({ blog }): JSX.Element {
  const resetForm = () => {};
  return (
    <Container style={{ padding: "40px 20px" }}>
      <Grid justifyContent="flex-start" container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid pt={50} item xs zeroMinWidth>
          <Typography gutterBottom>{blog.author}</Typography>
        </Grid>
      </Grid>
      <Grid pt={10} item xs zeroMinWidth>
        <Typography variant="h5" gutterBottom>
          {blog.title}
        </Typography>
      </Grid>
      <Grid justifyContent="flex-start" container wrap="nowrap" spacing={2}>
        <Grid item xs zeroMinWidth>
          {blog.post}
        </Grid>
      </Grid>
      <Grid
        justifyContent="flex-start"
        className={styles.commentSection}
        container
        wrap="nowrap"
        spacing={2}
      >
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid item xs zeroMinWidth className={styles.comments}></Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      <Comment />
    </Container>
  );
}

export default Blog;
