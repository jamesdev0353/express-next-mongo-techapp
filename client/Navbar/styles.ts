import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    // justifyContent: "space-between",
    width: "300px",
  },
  profilePhone: {
    display: "flex",

    // justifyContent: "space-between",
    marginRight: 1,
    // width: "400px",
    float: "right",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  userNamePhone: {
    // backgroundColor: "red",
    fontSize: 15,
    paddingTop: 30,
    marginLeft: 10,
    // marginTop: 50,
  },
  boxClass: {
    paddingTop: 15,
    marginTop: 0,
    // backgroundColor: "#2C3E50  ",
    height: 68.5,
    color: "#FFFFFF  ",
  },

  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
