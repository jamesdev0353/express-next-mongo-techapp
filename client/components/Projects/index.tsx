import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import styles from "../styles/Project.module.scss";

import Project from "./Project";
import { RootState } from "../../redux/rootReducer";

import { IProjectInfo } from "./interface";

function Projects({ setCurrentId }) {
  const projects: IProjectInfo[] = useSelector(
    (state: RootState | { projects: any }) => state.projects.projects
  );

  return (
    <>
      {!projects ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          alignItems="stretch"
          spacing={3}
          // className={styles.cardsGrid}
        >
          {projects.map((project: IProjectInfo) => (
            <Grid key={project._id} item xs={12} sm={6}>
              <Project project={project} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Projects;
