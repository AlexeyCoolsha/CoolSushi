import React from "react";

const Button = ({ text, iconClass, classModifier, eventHandler}) => {
  return (
    <button className={`btn${classModifier ? ` ${classModifier}` : ""}`} onClick={eventHandler}>
      {iconClass ? <i className={iconClass}></i> : ""}
      {text}
    </button>
  );
};

export default Button;
