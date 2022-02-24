import React, { useState, useEffect } from "react";
import InputForm from "../Form/InputForm";

import { Typography, Paper } from "@material-ui/core";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   createProject,
//   updatedProject,
// } from "./../../redux/Projects/projects.actions";

import FileBase from "react-file-base64";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";

import styles from "./../styles/Project.module.scss";

const mapState = ({ projects }) => ({
  projects: projects.projects,
});

const ProjectsForm = ({ currentId, setCurrentId }): JSX.Element => {
  // const dispatch = useDispatch();
  // const { projects } = useSelector(mapState);

  // console.log(user?.result?.name);
  // const project = useSelector((state) =>
  //   currentId ? state.projects.projects.find((p) => p._id === currentId) : null
  // );

  // const user = JSON.parse(localStorage.getItem("userProfile"));
  // console.log(user?.result?.name);
  // const project = projects.filter((word) => word._id === currentId);
  // console.log(project, "result");

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });

  // useEffect(() => {
  //   if (project) {
  //     setPostData({ ...project });
  //   }
  // }, [project]);

  const resetForm = () => {
    setPostData({
      title: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (currentId) {
    //   dispatch(
    //     updatedProject(currentId, { ...postData, name: user?.result?.name })
    //   );
    //   resetForm();
    //   // console.log(currentId, "currentId");
    // } else {
    //   dispatch(createProject({ ...postData, name: user?.result?.name }));
    //   resetForm();
    //   // console.log(postData);
    // }

    // resetForm();
  };
  // if (!user?.result?.name) {
  //   return (
  //     <Paper className={classes.paper}>
  //       <Typography variant="h6" align="center">
  //         Please Sign In to create your project.
  //       </Typography>
  //     </Paper>
  //   );
  // }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.projectForm}>
        <InputForm
          label="Title"
          color="success"
          variant="standard"
          fullWidth
          autoFocus="none"
          // sx={{ width: 250, mt: 3 }}
          value={postData.title}
          // onChange={(e) => setTitle(e.target.value)}
          // onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          //   sx={{  }}
        />
        <InputForm
          id="outlined-multiline-static"
          label="Description"
          multiline
          autoFocus="none"
          value={postData.description}
          rows={4}
          fullWidth
          sx={{ mt: 1.5 }}
          placeholder="write your description here.."
          // onChange={(e) => setDescription(e.target.value)}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <InputForm
          id="outlined-multiline-static"
          label="#tags"
          multiline
          value={postData.tags}
          rows={2}
          fullWidth
          sx={{ mt: 1.5 }}
          autoFocus="none"
          placeholder="#tags"
          // onChange={(e) => setTags(e.target.value)}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={styles.filebase}>
          <FileBase
            type="file"
            multiple={false}
            // onDone={({ base64 }) => setFile(base64)}
            fullWidth
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <ButtonGroup
          className={styles.btnProjectFormGroup}
          fullWidth
          size="large"
          sx={{ mt: 1.5 }}
        >
          <Button
            // className={styles.btnProjectForm}
            // sx={{ mt: 1.5 }}
            startIcon={<SaveIcon />}
            type="submit"
            size="large"
            color="primary"
            // style={{ width: 50 }}
          >
            add
          </Button>
          <Button
            startIcon={<BackspaceIcon />}
            // className={styles.btnProjectForm}
            // sx={{ mt: 1.5 }}
            color="secondary"
            size="large"
            onClick={resetForm}
            fullWidth
          >
            clear
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default ProjectsForm;
