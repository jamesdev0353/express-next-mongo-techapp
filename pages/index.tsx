import { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Home.module.css";
import { LoginContext } from "../client/components/Contexts";

export default function Home() {
  const context: any = useContext(LoginContext);
  const { userContextData, setUserContextData } = context;
  return (
    <div className={styles.container}>
      <div className={styles.cubeContainer}>
        <div className={styles.photoCube}>
          <div
            // src="https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            // alt=""
            className={styles.front}
          >
            <span>This is A text</span>
          </div>

          <div
            // src="https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            // alt=""
            className={styles.right}
          >
            <span>Second Side</span>
          </div>
          <div
            // src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            // alt=""
            className={styles.back}
          >
            <span>Third Side</span>
          </div>
          <div className={styles.left}>
            <h3>Rotate Cube</h3>
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
    </div>
  );
}
