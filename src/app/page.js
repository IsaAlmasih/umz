"use client";
import React from "react";

import styles from "./styles.module.css";

import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link href="/">
          <div className={styles.logo}></div>
        </Link>
      </div>
    </div>
  );
};

export default page;
