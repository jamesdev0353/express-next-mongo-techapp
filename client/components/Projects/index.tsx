import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Project from "./Project";
import { Grid, CircularProgress } from "@material-ui/core";
import { RootState } from "../../redux/rootReducer";

import { IProjectInfo, IProps } from "./interface";

function Projects({ setCurrentId }: IProps): JSX.Element {
  const projects: IProjectInfo[] = useSelector(
    (state: RootState | { projects: any }) => state.projects.projects
  );

  return (
    <>
      {!projects ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
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
