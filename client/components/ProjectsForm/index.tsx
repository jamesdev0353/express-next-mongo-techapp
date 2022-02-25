import React, { FC, useState, useEffect, FormEventHandler } from "react";
import InputForm from "../Form/InputForm";

import { Typography, Paper } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import {
  createProject,
  updatedProject,
} from "./../../redux/Projects/projects.actions";

import FileBase from "react-file-base64";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";

import styles from "./../styles/Project.module.scss";
import { RootState } from "../../redux/rootReducer";
import { IProjectInfo, IProps } from "./interface";



const ProjectsForm: FC<IProps> = ({ currentId, setCurrentId }): JSX.Element => {
  const dispatch = useDispatch();

  const project = useSelector((state: RootState | { projects: any }) =>
    currentId
      ? state.projects.projects.find((p: IProjectInfo) => p._id === currentId)
      : null
  );

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (project) {
      setPostData({ ...project });
    }
  }, [project]);

  const resetForm = () => {
    setPostData({
      title: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(0);
  };
  const handleSubmit = (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();

    if (currentId) {
      // dispatch();
      // updatedProject(currentId, { ...postData, name: user?.result?.name })
      resetForm();
    } else {
      dispatch(createProject({ ...postData }));
      resetForm();
    }

    resetForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.projectForm}>
        <InputForm
          label="Title"
          color="success"
          variant="standard"
          fullWidth
          autoFocus="none"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
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
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={styles.filebase}>
          <FileBase
            type="file"
            multiple={false}
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
            startIcon={<SaveIcon />}
            type="submit"
            size="large"
            color="primary"
          >
            add
          </Button>
          <Button
            startIcon={<BackspaceIcon />}
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
