import styles from "../../styles/Home.module.css";
import Navbar from "../Navbar";
import Meta from "./Meta";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Meta />
      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
