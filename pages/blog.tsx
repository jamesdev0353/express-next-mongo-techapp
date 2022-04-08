import React, { useEffect, Suspense } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import Box from "@mui/material/Box";
// import Blogs from "../client/components/Blogs";
import BlogForm from "../client/components/BlogForm";
import dynamic from "next/dynamic";
import Weather from "../client/components/Weather";
import Cryptos from "../client/components/Cryptos";
import styles from "./styles/Blog.module.scss";

const Blogs = dynamic(() => import("../client/components/Blogs"));

function Blog() {
  return (
    <div className={styles.container}>
      <Typography variant="h2" align="center" className={styles.header}>
        Your Blog Page
      </Typography>
      <Box>
        <div className={styles.bodyContainer}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
            className={styles.gridContainer}
          >
            <Grid item xs={12} md={8}>
              <Grid className={styles.containerForm}>
                <BlogForm className={styles.containerForm} />
              </Grid>
              <Grid className={styles.containerBlog}>
                <Blogs className={styles.containerBlog} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Weather />
              <Cryptos />
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default Blog;
