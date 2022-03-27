import React from "react";
import Blog from "./Blog";

import { Grid } from "@material-ui/core";

import styles from "./../styles/Blog.module.scss";

function Blogs() {
  return (
    <Grid
      // className={ }
      container
      alignItems="stretch"
      spacing={3}
      className={styles.gridContainer}
    >
      <Grid item xs={12} sm={12}>
        <Blog />
      </Grid>
    </Grid>
  );
}

export default Blogs;
