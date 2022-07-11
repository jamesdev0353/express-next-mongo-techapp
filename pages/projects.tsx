import React, { useState, useEffect } from "react";

import { Container, Typography, Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import Projects from "../client/components/Projects";
import ProjectsForm from "../client/components/ProjectsForm";
import Meta from "../client/components/Layouts/Meta";
import styles from "./styles/Project.module.scss";
// import { useProjectData } from "../client/apis/Projects/api";

function ProjectsV(props: any) {
  const [currentId, setCurrentId] = useState<any>(0);

  return (
    <Container maxWidth="lg" className={styles.trigger}>
      <Meta title="Projects" />
      <Typography variant="h2" align="center" className={styles.header}>
        here goes your projects
      </Typography>
      <Box>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Projects setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectsForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}

export default ProjectsV;
