import React from "react";
import "./TextBox.css";

const TextBox = (props) => {
  return (
    <div className="grupo">
      {props.text}
      <a href="#" className="links" {...props}>
        {props.linkText}
      </a>
    </div>
  );
};

export default TextBox;
