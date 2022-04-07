import { useEffect, useContext } from "react";
import { LoginContext } from "../components/Contexts";
interface IContextUser {
  userName: string;
  userId: string;
  userEmail: string;
}
export default function useDataUserContext() {
  const context: any = useContext(LoginContext);
  const { userContextData, setUserContextData } = context;
  const { userName, userId, userEmail }: IContextUser = userContextData;
  useEffect(() => {
    if (localStorage.getItem("userProfile")) {
      const storageData = JSON.parse(localStorage.getItem("userProfile"));
      setUserContextData({
        ...userContextData,
        userName: storageData.result.name,
        userEmail: storageData.result.email,
        userId: storageData.result._id,
      });
    }
  }, []);
  return { userContextData };
}
