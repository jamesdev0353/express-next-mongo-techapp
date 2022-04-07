import React from "react";
import { Avatar } from "@mui/material";
import { Box } from "@material-ui/core";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

// importing interface
export interface characterInfo {
  name: string;
  image: string;
}
//   height: 100px;
//   width: 100px;
//   margin: auto;
//   align-content: center;
//   align-items: center;
// }
const Profile = (props: characterInfo): JSX.Element => {
  return (
    <>
      <Box
        component="div"
        style={{
          //   display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            margin: "auto",
          }}
          src={props.image}
        />{" "}
        {props.name}
      </Box>
    </>
  );
};

export default Profile;
