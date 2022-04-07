export interface IGoogleUserProps {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

export interface IPropData {
  result?: IGoogleUserProps | IPropsSignInData;
  token?: string;
}

export interface IPropsSignUpData {
  userName: string;
  lastName: string;
  email: string;
  birthDay: string;
  password: string;
  confirmPassword: string;
}
export interface IPropsSignInData {
  __v: number;
  id: string;
  birthDay: string;
  email: string;
  name: string;
  password: string;
}

export interface UAction {
  payload?: IPropData;
  type:
    | "AUTH"
    | "SET_USER"
    | "CREATE_USER"
    | "LOG_IN_USER"
    | "LOG_OUT_USER"
    | "GOOGLE_AUTH";
  data: IPropData;
}
