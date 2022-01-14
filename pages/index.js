import React from "react";
import classes from "../styles/Home.module.css";
import Image from "../components/Image/Image";

export default function Home() {
  return (
    <>
      <div className={classes.container} style={{ backgroundColor: "#bcc4c0" }}>
        <Image src={"001.jpg"} />
      </div>
      <div className={classes.container} style={{ backgroundColor: "#decdc6" }}>
        <Image src={"002.jpg"} />
      </div>
      <div className={classes.container} style={{ backgroundColor: "#ded2b8" }}>
        <Image src={"003.jpg"} />
      </div>
    </>
  );
}