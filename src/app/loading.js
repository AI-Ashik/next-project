import React from "react";
import styles from "@/app/styles/thestyle.module.css";

const Loading = () => {
  return (
    <>
      <section className={styles.loading_section}>
        <div className={styles.loading}></div>
      </section>
    </>
  );
};

export default Loading;
