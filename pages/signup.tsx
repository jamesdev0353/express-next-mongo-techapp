import React from "react";
import Link from "next/link";
import SignUpForm from "../client/components/SignUpForm";
import styles from "./styles/Form.module.scss";
import Meta from "../client/components/Layouts/Meta";

function signup() {
  return (
    <div>
      <Meta title="Sign Up " />

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
