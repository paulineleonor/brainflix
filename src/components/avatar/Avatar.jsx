import React from "react";
import "./Avatar.scss";

const Avatar = ({ avatarClass, imageClass }) => {
  return (
    <div className={avatarClass}>
      <div className={imageClass}></div>
    </div>
  );
};

export default Avatar;
