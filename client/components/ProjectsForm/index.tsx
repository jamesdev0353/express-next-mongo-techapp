import React, { FC, useState, useEffect, FormEventHandler } from "react";
import InputForm from "../Form/InputForm";

import FileBase from "react-file-base64";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";

import styles from "./../styles/Project.module.scss";
import { IProject, IProjectInfo, IProps } from "./interface";
import { useMutation } from "react-query";
import axios from "axios";
import { useProjectData } from "../../apis/Projects/api";
import { IResponseData } from "../../apis/Projects/interface";
import useFriendStatus from "../../hooks";
import { DoDisturbAltSharp } from "@mui/icons-material";
// import { useAddProject } from "../../apis/Projects/api";

const ProjectsForm: FC<IProps> = ({ currentId, setCurrentId }): JSX.Element => {
  const useDipsatchCreateProject = useMutation((myProjectData: IProject) => {
    return axios.post(`http://localhost:3000/projects/api/`, myProjectData);
  });

  const useDipsatchUpdateProject = useMutation((myProjectData: IProject) => {
    return axios.patch(
      `http://localhost:3000/projects/api/${currentId}`,
      myProjectData
    );
  });
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const resetForm = () => {
    setPostData({
      title: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(0);
  };
  const { data } = useFriendStatus(currentId);
  useEffect(() => {
    if (currentId) {
      setPostData({
        title: data.title,
        description: data.description,
        tags: data.tags,
        selectedFile: data.selectedFile,
      });
    }
  }, [currentId, data.description, data.selectedFile, data.tags, data.title]);
  const handleSubmit = (e: React.SyntheticEvent | React.FormEvent) => {
    e.preventDefault();
    if (currentId) {
      console.log("Current id");

      const myProjectData: IProject = {
        ...postData,
        name: "user?.result?.name ",
      };
      useDipsatchUpdateProject.mutate(myProjectData);

      resetForm();
    } else {
      const myProjectData: IProject = {
        ...postData,
        name: "user?.result?.name ",
      };
      useDipsatchCreateProject.mutate(myProjectData);
      resetForm();
    }
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


