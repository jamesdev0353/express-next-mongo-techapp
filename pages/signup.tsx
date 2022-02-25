import React from "react";
import Head from "next/head";
import Link from "next/link";
import SignUpForm from "../client/components/SignUpForm";
import styles from "./styles/Form.module.scss";
function signup() {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        {/* <meta name="keywords" content="web development, programming" /> */}
      </Head>

      <SignUpForm />
      <p className={styles.formtext}>
        already have an acount{" "}
        <span>
          <Link href="/login">
            <a className={styles.linkText}>Log in</a>
          </Link>
        </span>
      </p>
    </div>
  );
}

export default signup;
