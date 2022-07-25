import React from "react";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";

// importing interface
export interface characterInfo {
  name: string;
  image: string;
}

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
        asd
      </Box>
    </>
  );
};

export default React.memo(Profile);
