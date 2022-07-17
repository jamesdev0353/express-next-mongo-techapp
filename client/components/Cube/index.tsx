import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import styles from "./Cube.module.scss";
import me from "./png.png";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import ImageComp from "../ImageComp";

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
        <div className={styles.front}>
          <h3>{props?.frontHeader}</h3>
          <ArrowCircleRightIcon
            className={styles.arrowRight}
            onClick={() => setRotate(1)}
          />
          <ArrowCircleLeftIcon
            className={styles.arrowLeft}
            onClick={() => setRotate(7)}
          />
          <ArrowCircleUpIcon
            className={styles.arrowUp}
            onClick={() => setRotate(5)}
          />
          <ArrowCircleDownIcon
            className={styles.arrowDown}
            onClick={() => setRotate(6)}
          />
        </div>
        <div className={styles.top}>
          <h3>{props.upHeader}</h3>
          <ArrowCircleDownIcon
            className={styles.arrowDown}
            onClick={() => setRotate(4)}
          />
          <ArrowCircleRightIcon
            className={styles.arrowRight}
            onClick={() => setRotate(1)}
          />
          <ArrowCircleUpIcon
            className={styles.arrowUp}
            onClick={() => setRotate(2)}
          />
          <ArrowCircleLeftIcon
            className={styles.arrowLeft}
            onClick={() => setRotate(7)}
          />
        </div>
        <div className={styles.right}>
          <h3>{props.rightHeader}</h3>
          <ArrowCircleRightIcon
            className={styles.arrowRight}
            onClick={() => setRotate(2)}
          />
          <ArrowCircleLeftIcon
            className={styles.arrowLeft}
            onClick={() => setRotate(4)}
          />
          <ArrowCircleUpIcon
            className={styles.arrowUp}
            onClick={() => setRotate(5)}
          />
          <ArrowCircleDownIcon
            className={styles.arrowDown}
            onClick={() => setRotate(6)}
          />
        </div>
        <div
          className={styles.back}
          style={{
            backgroundImage: `${props.backImg}`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: "center/cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundImage: `url(./png.png)  no-repeat center center/cover`,
          }}
        >
          <ArrowCircleLeftIcon
            className={styles.arrowLeft}
            onClick={() => setRotate(3)}
          />
          <ArrowCircleUpIcon
            className={styles.arrowUp}
            onClick={() => setRotate(5)}
          />
          <ArrowCircleRightIcon
            className={styles.arrowRight}
            onClick={() => setRotate(1)}
          />
          <ArrowCircleDownIcon
            className={styles.arrowDown}
            onClick={() => setRotate(6)}
          />
          {/* <ImageComp
            src={"/png.png"}
            height={"350px"}
            width={"350px"}
            alt={"hobbies"}
          /> */}
        </div>
        <div className={styles.left}>
          <h3>{props.leftHeader}</h3>
          <ArrowCircleRightIcon
            className={styles.arrowRight}
            onClick={() => setRotate(4)}
          />
          <ArrowCircleLeftIcon
            className={styles.arrowLeft}
            onClick={() => setRotate(8)}
          />
          <ArrowCircleUpIcon
            className={styles.arrowUp}
            onClick={() => setRotate(5)}
          />
          <ArrowCircleDownIcon
            className={styles.arrowDown}
            onClick={() => setRotate(6)}
          />
          <p>{props.left}</p>
          <a href="#" className="button">
            Download
          </a>
        </div>
        <div className={styles.bottom}>
          <h3>{props.downHeader}</h3>
          <ArrowCircleUpIcon
            className={styles.arrowUp}
            onClick={() => setRotate(4)}
          />
          <ArrowCircleRightIcon
            className={styles.arrowRight}
            onClick={() => setRotate(1)}
          />
          <ArrowCircleDownIcon
            className={styles.arrowDown}
            onClick={() => setRotate(2)}
          />
          <ArrowCircleLeftIcon
            className={styles.arrowLeft}
            onClick={() => setRotate(7)}
          />
        </div>
      </div>
    </div>
  );
}

export default Cube;
