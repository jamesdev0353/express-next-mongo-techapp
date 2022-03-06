import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../apis/createStore";
import type { RootState } from "../apis/rootReducer";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { useState, useEffect } from "react";
import { useProjectData } from "../apis/Projects/api";
import { IProjectInfo, IResponseData } from "../apis/Projects/interface";

export default function useFriendStatus(currentId: string) {
  const [projects, setProjects] = useState<IProjectInfo[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const onSuccess = (data: IResponseData) => {
    console.log(data.data, "data page");
    setProjects(data.data);
  };
  const onError = (error: Error) => {
    console.log(error);
  };
  const {} = useProjectData(onSuccess, onError);
  useEffect(() => {
    try {
      const project = currentId
        ? projects.find((p) => p._id === currentId)
        : null;
      setIsPending(false);
      if (currentId) {
        setData({
          title: project.title,
          description: project.description,
          tags: project.tags.join(),
          selectedFile: project.selectedFile,
        });
      }
    } catch (error) {
      console.log(error);
      setIsPending(true);
      setError(error);
    }
  }, [currentId, projects]);
  return { data, isPending, error };
}