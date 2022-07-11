import React from "react";
import { useContext } from "react";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
// import Blogs from "../client/components/Blogs";
import dynamic from "next/dynamic";
import styles from "./styles/Home.module.css";
import { LoginContext } from "../client/components/Contexts";
import Cube from "../client/components/Cube";

export default function Home() {
  const context: any = useContext(LoginContext);

  return (
    <div className={styles.container}>
      <Typography variant="h2" align="center" className={styles.header}>
        Your Blog Page
      </Typography>
      <div className={styles.mainDiv}>
        <div className={styles.detailsInfo}>
          <span>
            whoami: Full Stack Node.js Engineer from Greece passionate with
            coding and algorithms. With critical and analytical skills in
            solving problems, fast learning and in depth, tracking new
            technologies to bring the best effort in the team and in product.
            Able to colaborate with a team or work as a unit and with time
            pressure and deadlines.
            <br /> I like challenges because challenges make us better and
            better over time
          </span>
          <hr />
          <span>
            utopia: Technologies and algorithms will not only help our lives run
            smoothly, will help us improve our civilization and expand life on
            earth or maybe on a diffrent planets.
            <br /> So is it our duty to help tech improve ?
          </span>
        </div>
        <div className={styles.cubeInfo}>
          <Cube />
        </div>
      </div>
    </div>
  );
}
