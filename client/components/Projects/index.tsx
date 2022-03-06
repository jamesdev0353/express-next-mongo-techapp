import React, { FC, useState, useEffect } from "react";

import Project from "./Project";
import { Grid, CircularProgress } from "@material-ui/core";
import { useProjectData } from "./../../apis/Projects/api";
import { IProjectInfo, IProps } from "./interface";

interface IResponseData extends Response {
  data: IProjectInfo[];
}

function Projects({ setCurrentId }: IProps): JSX.Element {
  const [bool, setBool] = useState<boolean>(false);
  const [projects, setProjects] = useState<IProjectInfo[]>([]);
  const onSuccess = (data: IResponseData) => {
    setProjects(data.data);
    setBool(true);
  };
  const onError = (error: Error) => {
    setBool(false);
  };
  const { isLoading, data, isError, error, refetch } = useProjectData(
    onSuccess,
    onError
  );

  return (
    <>
      {!bool || !projects || isLoading || !data || isError ? (
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
