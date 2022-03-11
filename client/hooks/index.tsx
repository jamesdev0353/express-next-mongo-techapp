import { useState, useEffect } from "react";
import { useProjectData } from "../apis/Projects/api";
import { IProjectInfo, IResponseData } from "../apis/Projects/interface";

export default function useUpdateFields(currentId: string) {
  const [projects, setProjects] = useState<IProjectInfo[]>([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const onSuccess = (data: IResponseData) => {
    setProjects(data.data);
  };
  const onError = (error: Error) => {};
  const {} = useProjectData(onSuccess, onError);
  useEffect(() => {
    const project = currentId
      ? projects.find((p) => p._id === currentId)
      : null;

    if (currentId) {
      setData({
        title: project.title,
        description: project.description,
        tags: project.tags.join(),
        selectedFile: project.selectedFile,
      });
    }
  }, [currentId, projects]);
  return { data };
}
