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
      <p>this is my first touch</p>
    </div>
  );
}
