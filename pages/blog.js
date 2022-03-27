import React, { useEffect } from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import Blogs from "../clientF/components/Blogs";
import BlogForm from "../clientF/components/BlogForm";

import Weather from "../clientF/components/Weather";
import Cryptos from "../clientF/components/Cryptos";

import { useDispatch } from "react-redux";
import { getCryptos } from "../clientF/redux/BlockChain/blockchain.actions";
import { setUserAction } from "./../clientF/redux/User/user.actions";

import styles from "./styles/Blog.module.scss";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptos());
    dispatch(setUserAction(JSON.parse(localStorage.getItem("userProfile"))));
  }, [dispatch]);

  return (
    <div
      // maxWidth="lg"
      // asdasdas
      className={styles.container}
    >
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
              <Grid className={styles.containerForm}>
                <Blogs />
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
