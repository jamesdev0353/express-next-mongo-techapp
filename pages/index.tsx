import React from "react";
import { useContext } from "react";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
// import Blogs from "../client/components/Blogs";
import dynamic from "next/dynamic";
import styles from "./styles/Home.module.css";
import { LoginContext } from "../client/components/Contexts";
import Cube from "../client/components/Cube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ImageComp from "../client/components/ImageComp";
import dash1 from "./assets/dash1.png";
import DimCube from "../client/components/DimCube";

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
            whoami:
            <br /> Full Stack Node.js Engineer from Greece passionate with
            coding and algorithms. With critical and analytical skills in
            solving problems, fast learning in depth, tracking new technologies
            to bring the best effort in the team and in product. Able to
            colaborate with a team or work as a unit, with time pressure and
            deadlines.
            <br /> I like challenges because challenges make us better and
            better over time
          </span>
          <hr />
          <span>
            studies:
            <br /> 2021 - Now (Greece - Athens) MSc, in Computer Science at
            University of Piraeus, Integrated Master
            <br /> 2020 (Greece – Athens) MSc, Soil Science & Agricultural
            Chemistry, Agricultural University of Athens, Integrated Master
            <br />
            2013 - 2020 (Greece– Athens) Natural Resources Management &
            Agricultural Engineering, Agricultural University of Athens,
            Bachelor
            <br /> 2019 (Spain - Gijon) Capacity building on Creating, Designing
            and Managing Innovative Ideas (TEAM LEADER), Erasmus +
          </span>
          <hr />
          <span>
            utopia:
            <br /> Technologies and algorithms will not only help our lives run
            smoothly, will help us improve our civilization and expand life on
            earth or maybe on a diffrent planets.
            <br /> So is it our duty to help tech improve ?
          </span>
        </div>
        <div className={styles.cubeInfo}>
          <Cube />
        </div>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.detailsInfo}>
          <span>
            Technologies:
            <br />• Languages: Typescript. Javascript
            <br />• Libraries: Node.js, React, Remix.js, Next.js, Express.js,
            React Query, Redux, eslint, husky, JQuery.
            <br />• Styling: CSS, SCSS, Material UI/ MUI, Tailwind CSS,
            Bootstrap
            <br />• Versioning tool: Git
            <br />• Versioning platforms: Github, Gitlab build with
            <br />• Testing: Jest enzyme, React test
            <br />• Databases: MongoDB, SQL, Firebase
            <br />• DevOps tools: LINUX, AWS cloud, VM’s, Docker
            <br />• PaaS: Heroku, Netlify
            <br />• Methodologies: agile, scrum
          </span>
          <hr />
          <span>
            Other Programming Knowledge:
            <br />• Languages: JAVA, Python, Shell Scripting, C#
          </span>
        </div>
        <div className={styles.cubeInfo}></div>
      </div>
      <div>
        <ImageComp
          src={dash1}
          height={"350px"}
          width={"350px"}
          alt={"dashboard"}
        />
      </div>
    </div>
  );
}
