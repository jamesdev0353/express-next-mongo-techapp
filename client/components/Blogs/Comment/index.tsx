import { Avatar, Grid } from "@mui/material";
import React from "react";
import styles from "./../../styles/Blog.module.scss";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Comment(props: any) {
  return (
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
  );
}

export default Comment;
