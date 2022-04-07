import React from "react";
import Link from "next/link";
import LoginForm from "../client/components/LogInForm";
import styles from "./styles/Form.module.scss";
import Meta from "../client/components/Layouts/Meta";
import axios from "axios";


function login() {
  return (
    <div>
      <Meta title="Log In" />
      <p className={styles.formtext}>
        not an acount{" "}
        <span>
          <Link href="/signup">
            <a className={styles.linkText}>Sign Up</a>
          </Link>
        </span>
      </p>

      <LoginForm />
    </div>
  );
}

export default login;
