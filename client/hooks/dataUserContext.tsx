import { useState, useEffect, useContext } from "react";
import { useProjectData } from "../apis/Projects/api/projectAPI";
import {
  IProjectInfo,
  IResponseData,
} from "../apis/Projects/interface/IProject";
import { LoginContext } from "../components/Contexts";
interface IPropCrypt {
  name: string;
  price: string;
  symbol: string;
}
export default function useDataUserContext() {
  const context: any = useContext(LoginContext);
  const { userContextData, setUserContextData } = context;
  const { userName, userId, userEmail } = userContextData;
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("userProfile"));
    setUserContextData({
      ...userContextData,
      userName: storageData.result.name,
      userEmail: storageData.result.email,
      userId: storageData.result._id,
    });
  }, []);
  return { userContextData };
}
