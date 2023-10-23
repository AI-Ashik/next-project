import React from "react";
import styles from "@/app/styles/thestyle.module.css";
import Link from "next/link";

const notfound = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={(styles.error_page, styles.error_styles)}>
          <h1>404</h1>

          <h1>Not Found</h1>
          <p>Could not found the recourse</p>

          <Link href="/">
            <button>Go To Home</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default notfound;
