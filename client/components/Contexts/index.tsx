import { createContext, useState } from "react";


const IContextUserState: IContextProps = {
  userName: "",
  userEmail: "",
  userId: "",
};

type IContextProps = {
  userName: string;
  userEmail: string;
  userId: string;
};
export const LoginContext = createContext<Partial<IContextProps>>({});

export const AuthWrapperContext: React.FC = ({ children }) => {
  const [userContextData, setUserContextData] =
    useState<IContextProps>(IContextUserState);
  const state: any = {
    userContextData,
    setUserContextData,
  };
  return (
    <LoginContext.Provider value={state}>{children}</LoginContext.Provider>
  );
};
export default AuthWrapperContext;
