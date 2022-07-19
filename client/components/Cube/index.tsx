import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import styles from "./Cube.module.scss";

interface IArrowProps {
  arrowLeft: number;
  arrowUp: number;
  arrowDown: number;
  arrowRight: number;
  setRotate: any;
}
export const Arrows = (props: IArrowProps) => {
  return (
    <>
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
    </>
  );
};

interface ICubeProps {
  front?: string;
  frontHeader?: string;
  frontImg?: string | StaticImageData;
  back?: string;
  backHeader?: string;
  backImg: string | StaticImageData;
  left?: string;
  leftHeader?: string;
  leftImg?: string | StaticImageData;
  right?: string;
  rightHeader?: string;
  rightImg?: string | StaticImageData;
  up?: string;
  upHeader?: string;
  upImg?: string | StaticImageData;
  down?: string;
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
        <div
          className={styles.front}
          style={{
            backgroundImage: props.frontImg ? `url(${props.frontImg})` : "",
          }}
        >
          <h3>{props?.frontHeader}</h3>
          <Arrows
            arrowLeft={7}
            arrowUp={5}
            arrowDown={6}
            arrowRight={1}
            setRotate={setRotate}
          />
        </div>
        <div className={styles.top}>
          <h3>{props.upHeader}</h3>
          <Arrows
            arrowLeft={7}
            arrowUp={2}
            arrowDown={4}
            arrowRight={1}
            setRotate={setRotate}
          />
        </div>
        <div className={styles.right}>
          <h3>{props.rightHeader}</h3>
          <Arrows
            arrowLeft={4}
            arrowUp={5}
            arrowDown={6}
            arrowRight={2}
            setRotate={setRotate}
          />
        </div>
        <div
          className={styles.back}
          style={{ backgroundImage: `url(${props.backImg})` }}
        >
          <Arrows
            arrowLeft={7}
            arrowUp={5}
            arrowDown={6}
            arrowRight={1}
            setRotate={setRotate}
          />
        </div>
        <div className={styles.left}>
          <h3>{props.leftHeader}</h3>
          <Arrows
            arrowLeft={8}
            arrowUp={5}
            arrowDown={6}
            arrowRight={4}
            setRotate={setRotate}
          />
          <p>{props.left}</p>
          <a href="#" className="button">
            Download
          </a>
        </div>
        <div className={styles.bottom}>
          <h3>{props.downHeader}</h3>
          <Arrows
            arrowLeft={7}
            arrowUp={4}
            arrowDown={2}
            arrowRight={1}
            setRotate={setRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default Cube;
