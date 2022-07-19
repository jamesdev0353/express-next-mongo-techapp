import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import styles from "./Cube.module.scss";
import { StaticImageData } from "next/image";

interface ICubeSideProps {
  muiIcon?: React.FC;
  description: string;
  title: string;
  backgroundImg: string | StaticImageData;
  cssStyles: string;
  arrowLeft: number;
  arrowUp: number;
  arrowDown: number;
  arrowRight: number;
  setRotate: any;
}
export const CubeSide = (props: ICubeSideProps): JSX.Element => {
  return (
    <div
      className={props.cssStyles}
      style={{
        backgroundImage: props.backgroundImg
          ? `url(${props.backgroundImg})`
          : "",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{props.title}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.muiIcon ? <props.muiIcon /> : <></>}
          <span style={{ width: "80%" }}>{props.description}</span>
        </div>
      </div>
      <ArrowCircleLeftIcon
        className={styles.arrowLeft}
        onClick={() => props.setRotate(props.arrowLeft)}
      />
      <ArrowCircleUpIcon
        className={styles.arrowUp}
        onClick={() => props.setRotate(props.arrowUp)}
      />
      <ArrowCircleRightIcon
        className={styles.arrowRight}
        onClick={() => props.setRotate(props.arrowRight)}
      />
      <ArrowCircleDownIcon
        className={styles.arrowDown}
        onClick={() => props.setRotate(props.arrowDown)}
      />
    </div>
  );
};

interface ICubeProps {
  frontHeader?: string;
  frontDescription?: string;
  frontIcon?: React.FC;
  frontImg?: string | StaticImageData;
  backIcon?: React.FC;
  backHeader?: string;
  backDescription?: string;
  backImg: string | StaticImageData;
  leftIcon?: React.FC;
  leftDescription?: string;
  leftHeader?: string;
  leftImg?: string | StaticImageData;
  rightIcon?: React.FC;
  rightDescription?: string;
  rightHeader?: string;
  rightImg?: string | StaticImageData;
  upIcon?: React.FC;
  upDescription?: string;
  upHeader?: string;
  upImg?: string | StaticImageData;
  downIcon?: React.FC;
  downDescription?: string;
  downHeader?: string;
  downImg?: string | StaticImageData;
}

function Cube(props: ICubeProps) {
  const [rotate, setRotate] = React.useState(0);
  const rotation = (number: number) => {
    switch (number) {
      case 0:
        return `${styles.photoCube}`;
      case 1:
        return `${styles.photoCube} ${styles.rotate}`;
      case 2:
        return `${styles.photoCube} ${styles.rotate2}`;
      case 3:
        return `${styles.photoCube} ${styles.rotate3}`;
      case 4:
        return `${styles.photoCube} ${styles.rotate4}`;
      case 5:
        return `${styles.photoCube} ${styles.rotate5}`;
      case 6:
        return `${styles.photoCube} ${styles.rotate6}`;
      case 7:
        return `${styles.photoCube} ${styles.rotate7}`;
      case 8:
        return `${styles.photoCube} ${styles.rotate8}`;
    }
  };
  return (
    <div className={styles.cubeContainer}>
      <div className={rotate ? rotation(rotate) : styles.photoCube}>
        <CubeSide
          muiIcon={props.frontIcon}
          title={props.frontHeader}
          description={props.frontDescription}
          cssStyles={styles.front}
          arrowLeft={7}
          arrowUp={5}
          arrowDown={6}
          arrowRight={1}
          setRotate={setRotate}
          backgroundImg={props.frontImg}
        />
        <CubeSide
          muiIcon={props.upIcon}
          title={props.upHeader}
          description={props.upDescription}
          arrowLeft={7}
          arrowUp={2}
          arrowDown={4}
          arrowRight={1}
          setRotate={setRotate}
          cssStyles={styles.top}
          backgroundImg={""}
        />
        <CubeSide
          muiIcon={props.rightIcon}
          title={props.rightHeader}
          description={props.rightDescription}
          arrowLeft={4}
          arrowUp={5}
          arrowDown={6}
          arrowRight={2}
          setRotate={setRotate}
          cssStyles={styles.right}
          backgroundImg={""}
        />
        <CubeSide
          title={props.backHeader}
          description={props.backDescription}
          arrowLeft={7}
          arrowUp={5}
          arrowDown={6}
          arrowRight={1}
          setRotate={setRotate}
          backgroundImg={props.backImg}
          cssStyles={styles.back}
        />
        <CubeSide
          title={props.leftHeader}
          description={props.leftDescription}
          arrowLeft={8}
          arrowUp={5}
          arrowDown={6}
          arrowRight={4}
          setRotate={setRotate}
          backgroundImg={props.leftImg}
          cssStyles={styles.left}
        />
        <CubeSide
          title={props.downHeader}
          description={props.downDescription}
          arrowLeft={7}
          arrowUp={4}
          arrowDown={2}
          arrowRight={1}
          setRotate={setRotate}
          cssStyles={styles.bottom}
          backgroundImg={props.downImg}
        />
      </div>
    </div>
  );
}

export default Cube;
