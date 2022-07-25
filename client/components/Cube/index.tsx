import React, { useCallback, useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import styles from "./Cube.module.scss";
import { StaticImageData } from "next/image";
export { default as ErrorBoundary } from "@/components/ErrorBoundary";

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
  isModal: boolean;
}
export const CubeSide = (props: ICubeSideProps): JSX.Element => {
  const styleNone = props.isModal ? { display: "none" } : { display: "true" };

  const styleMirror =
    props.cssStyles === styles.back
      ? props.isModal
        ? styles.backToModal
        : props.cssStyles
      : props.cssStyles;
  return (
    <div
      className={styleMirror}
      style={{
        backgroundImage: props.backgroundImg
          ? `url(${props.backgroundImg})`
          : props.isModal
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
        style={styleNone}
        className={styles.arrowUp}
        onClick={() => props.setRotate(props.arrowUp)}
      />
      <ArrowCircleRightIcon
        className={styles.arrowRight}
        onClick={() => props.setRotate(props.arrowRight)}
      />
      <ArrowCircleDownIcon
        style={styleNone}
        className={styles.arrowDown}
        onClick={() => props.setRotate(props.arrowDown)}
      />
    </div>
  );
};

interface ICubeProps {
  isModal: boolean;
  frontHeader?: string;
  frontDescription?: string;
  frontIcon?: React.FC;
  frontImg?: string | StaticImageData;
  backIcon?: React.FC;
  backHeader?: string;
  backDescription?: string;
  backImg?: string | StaticImageData;
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
  style?: any;
}

function Cube(props: ICubeProps) {
  const [rotate, setRotate] = React.useState(0);

  const rotation = useCallback(
    (number: number) => {
      if (!props.isModal) {
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
      } else {
        switch (number) {
          case 0:
            return `${styles.photoCube}`;
          case 1:
            return `${styles.photoCube} ${styles.rotateModal}`;
          case 2:
            return `${styles.photoCube} ${styles.rotateModal2}`;
          case 3:
            return `${styles.photoCube} ${styles.rotateModal3}`;
          case 4:
            return `${styles.photoCube} ${styles.rotateModal4}`;
          case 5:
            return `${styles.photoCube} ${styles.rotateModal5}`;
          case 6:
            return `${styles.photoCube} ${styles.rotateModal6}`;
          case 7:
            return `${styles.photoCube} ${styles.rotateModal7}`;
          case 8:
            return `${styles.photoCube} ${styles.rotateModal8}`;
        }
      }
    },
    [props.isModal]
  );
  // const cubeWrapper = !props.isModal ? styles.modalCube :styles.photoCube
  return (
    <div
      className={
        !props.isModal ? styles.cubeContainer : styles.cubeContainerModal
      }
    >
      <div
        className={
          !props.isModal
            ? rotate
              ? rotation(rotate)
              : styles.photoCube
            : rotate
            ? rotation(rotate)
            : styles.modalCube
        }
        style={{ width: props.isModal ? "200%" : "" }}
      >
        <CubeSide
          isModal={props.isModal}
          muiIcon={props.frontIcon}
          title={props.frontHeader}
          description={props.frontDescription}
          cssStyles={!props.isModal ? styles.front : styles.frontToModal}
          arrowLeft={7}
          arrowUp={5}
          arrowDown={6}
          arrowRight={1}
          setRotate={setRotate}
          backgroundImg={props.frontImg}
        />
        <CubeSide
          isModal={props.isModal}
          muiIcon={props.upIcon}
          title={props.upHeader}
          description={props.upDescription}
          arrowLeft={7}
          arrowUp={2}
          arrowDown={4}
          arrowRight={1}
          setRotate={setRotate}
          cssStyles={!props.isModal ? styles.top : styles.upDownModal}
          backgroundImg={""}
        />
        <CubeSide
          isModal={props.isModal}
          muiIcon={props.rightIcon}
          title={props.rightHeader}
          description={props.rightDescription}
          arrowLeft={4}
          arrowUp={5}
          arrowDown={6}
          arrowRight={2}
          setRotate={setRotate}
          cssStyles={!props.isModal ? styles.right : styles.rightToModal}
          backgroundImg={""}
        />
        <CubeSide
          isModal={props.isModal}
          title={props.backHeader}
          description={props.backDescription}
          arrowLeft={1}
          arrowUp={5}
          arrowDown={6}
          arrowRight={!props.isModal ? 1 : 3}
          setRotate={setRotate}
          backgroundImg={props.backImg}
          cssStyles={!props.isModal ? styles.back : styles.backToModal}
        />
        <CubeSide
          isModal={props.isModal}
          title={props.leftHeader}
          description={props.leftDescription}
          arrowLeft={8}
          arrowUp={5}
          arrowDown={6}
          arrowRight={4}
          setRotate={setRotate}
          backgroundImg={props.leftImg}
          cssStyles={!props.isModal ? styles.left : styles.leftToModal}
        />
        <CubeSide
          title={props.downHeader}
          isModal={props.isModal}
          description={props.downDescription}
          arrowLeft={7}
          arrowUp={4}
          arrowDown={2}
          arrowRight={1}
          setRotate={setRotate}
          cssStyles={!props.isModal ? styles.bottom : styles.upDownModal}
          backgroundImg={props.downImg}
        />
      </div>
    </div>
  );
}

export default React.memo(Cube);
