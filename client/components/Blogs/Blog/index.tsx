import React from "react";
import {
  Container,
  Divider,
  Avatar,
  Paper,
  Typography,
} from "@material-ui/core";
import { Grid } from "@mui/material";
// asdasd
import Comment from "../Comment";

import styles from "./../../styles/Blog.module.scss";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const comm =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.";

const time = "posted 1 minute ago";

const title = "1st title";

const auth = "Michael John";

function Blog(props: any) {
  return (
    <Container style={{ padding: "40px 20px" }}>
      <Grid justifyContent="flex-start" container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid pt={50} item xs zeroMinWidth>
          <Typography gutterBottom>{auth}</Typography>
        </Grid>
      </Grid>
      <Grid pt={10} item xs zeroMinWidth>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      </Grid>
      <Grid justifyContent="flex-start" container wrap="nowrap" spacing={2}>
        <Grid item xs zeroMinWidth>
          {comm}
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
