import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LoginIcon from "@mui/icons-material/Login";
import AirIcon from "@mui/icons-material/Air";
import LogoutIcon from "@mui/icons-material/Logout";
export const pages = [
  {
    title: "ΗΟΜΕ",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <BookIcon />,
  },

  {
    title: "Projects",
    path: "/projects",
    icon: <AccountTreeIcon />,
  },
  {
    title: "Weather",
    path: "/weather",
    icon: <AirIcon />,
  },
];

export const loginform = [
  {
    title: "Log In",
    path: "/login",
    icon: <LoginIcon />,
  },
];

export const logoutform = [
  {
    title: "Log Out",
    // path: "/login",
    icon: <LogoutIcon />,
  },
];

export const signupform = [
  {
    title: "Sign Up",
    path: "/signup",
  },
];
