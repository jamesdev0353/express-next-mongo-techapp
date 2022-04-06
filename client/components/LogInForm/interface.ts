export interface IGoogleUserProps {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

export interface IUserProps {
  __v: number;
  _id: string;
  birthDay: string;
  email: string;
  name: string;
  password: string;
}

export type IPropData = {
  result?: IGoogleUserProps | IUserProps;
  token?: string;
};

export interface IPropUserData {
  currentUser: string | null;
  user: string | null;
}
