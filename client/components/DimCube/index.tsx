import React from "react";
import styles from "./Cube.module.scss";

function DimCube() {
  return (
    <div className={styles.boWrap}>
      <div className={styles.cubeContainer}>
        <input
          className={styles.radioButton}
          type="radio"
          name="cube-gallery"
          checked
        />
        <input
          className={styles.radioButton}
          type="radio"
          name="cube-gallery"
        />
        <input
          className={styles.radioButton}
          type="radio"
          name="cube-gallery"
        />
        <input
          className={styles.radioButton}
          type="radio"
          name="cube-gallery"
        />
        <input
          className={styles.radioButton}
          type="radio"
          name="cube-gallery"
        />
        <input
          className={styles.radioButton}
          type="radio"
          name="cube-gallery"
        />
        <div className="cube">
          <div className={styles.cubeSide}></div>
          <div className={styles.cubeSide}></div>
          <div className={styles.cubeSide}></div>
          <div className={styles.cubeSide}></div>
          <div className={styles.cubeSide}></div>
          <div className={styles.cubeSide}></div>
        </div>
      </div>
    </div>
  );
}

export default DimCube;
