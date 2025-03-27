import React from "react";
import "./InputWrapper.css";

const InputWrapper = ({ children, icon: Icon }) => {
  return (
    <div className="input-wrapper">
      {children}
      {Icon && <Icon className="icon" />}
    </div>
  );
};

export default InputWrapper;
