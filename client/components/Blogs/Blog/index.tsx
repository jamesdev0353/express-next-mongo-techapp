import React, { useEffect, useState } from "react";
import {
  Container,
  Divider,
  Avatar,
  Paper,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import Comment from "../Comment";
import CommentForm from "../Comment/commentForm";

import styles from "./../../styles/Blog.module.scss";
import { IPostData, IPostInfo, IComment } from "./../interface";
import { useQuery } from "react-query";
import { requestData } from "../../../apis/utils/axios-utils";
import { useCommentData } from "../../../apis/Posts/api/postsAPI";
import useCommentDataHook from "../../../hooks/commentHook";
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Blog({ blog }): JSX.Element {
  const { comments } = useCommentDataHook(blog._id);
  // const isLoading = (data: any) => {
  //   console.log("loading...");
  // };
  //
  // const onSuccess = (data: any) => {
  //   setComments(data.data.comments);
  //   console.log(comments);
  //   setBool(true);
  // };
  // const onError = (error: Error) => {
  //   setBool(false);
  // };

  // const {} = useCommentData(isLoading, onSuccess, onError, blog._id);
  // if (comments) {
  //   comments.map((comment: IComment) => {
  //     console.log(comment.comment);
  //   });
  // }
  // const fetchCommentData = (id: string) => {
  //   return requestData({ url: `/blog/api/${id}` });
  // };
  // const { isLoading, error, data } = useQuery("commentData", () =>
  //   fetch(`http://localhost:3000/blog/api/${blog._id}`).then((res) => {
  //     return res.json();
  //   })
  // );

  // data.comments.map((comment: IComment) => console.log(comment.comment));
  // if (isLoading) {
  //   return <>Loading...</>;
  // } else {
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
      {comments ? (
        comments.map((comment: IComment) => {
          // <Comment />;
          <div>{comment.comment}</div>;
        })
      ) : (
        <Comment />
      )}
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      <CommentForm blogId={blog._id} />
    </Container>
  );
  // }
}

export default Blog;
