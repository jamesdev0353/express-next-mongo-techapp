import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import styles from "./Cube.module.scss";
// import me from "./../assets/me.jpg";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";

// import Image from 'next/image'
// import mypic from "./../assets/png.jpg";
const MyImage = (props) => {
  return (
    <Image
      src="/png.png"
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  );
};
function Cube() {
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
    }
  };
  return (
    <div className={styles.cubeContainer}>
      <div className={rotate ? rotation(rotate) : styles.photoCube}>
        <div className={styles.front}>
          <span>This is A text</span>
          <ArrowCircleRightIcon
            className={styles.arrow}
            onClick={() => setRotate(1)}
          />
        </div>

        <div className={styles.right}>
          <span>Second Side</span>
          <ArrowCircleRightIcon
            className={styles.arrow}
            onClick={() => setRotate(2)}
          />
        </div>
        <div className={styles.back}>
          <ArrowCircleLeftIcon
            className={styles.arrow}
            onClick={() => setRotate(3)}
          />
          {/* <MyImage /> */}
        </div>
        <div className={styles.left}>
          <h3>Rotate Cube</h3>
          <ArrowCircleLeftIcon
            className={styles.arrow}
            onClick={() => setRotate(4)}
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quas?
          </p>
          <a href="#" className="button">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cube;
