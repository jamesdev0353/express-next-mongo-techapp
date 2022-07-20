import React from "react";
import Link from "next/link";

const ErrorPage: React.FC = ({ children }: any) => {
  return (
    <div
      style={{
        minHeight: "70vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={header}>Something Went Wrong</h1>
      <Link style={navigateLink} href="/">
        {t("int.back-to-home")}
      </Link>
      {children}
    </div>
  );
};

const header = {
  marginTop: "40px",
  marginBottom: "15px",
  fontSize: "26px",
  fontWeight: "600",
};

const navigateLink = {
  fontWeight: "600",
  color: "black",
  textDecoration: "none",
  fontSize: "14px",
  marginTop: "10px",
};

export default ErrorPage;
