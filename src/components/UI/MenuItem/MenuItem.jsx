import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({href, iconClass, text}) => {
  return (
    <div className="menu-item">
      <Link to={href} className="btn menu-link">
        {iconClass ? <i className={iconClass}></i> : ""}
        {text}
      </Link>
    </div>
  );
};

export default MenuItem;
