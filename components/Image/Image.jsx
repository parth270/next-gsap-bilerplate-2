import React from "react";
import classes from "./Image.module.css";
import { Reveal, Tween } from "react-gsap";

const Image = (props) => {
  return (
    <div className={classes["sm-container"]}>
      <Reveal trigger={<span />} repeat={true}>
        <span className={classes.trigger} />
        <Tween
          from={{
            scale: 1.2,
            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          to={{
            scale: 1,
            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          duration={1}
        >
          <img src={props.src} alt="" />
        </Tween>
      </Reveal>
    </div>
  );
};

export default Image;
