import React from "react";
import "./Avatar.scss";

const Avatar = (props) => {
  return (
    <div className={props.avatarClass}>
      <div className={props.imageClass}></div>
    </div>
  );
};

export default Avatar;
