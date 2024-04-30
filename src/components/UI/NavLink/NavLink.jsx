import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({href, children}) => {
  return (
    <Link to={href} className="btn link">
      {children}
    </Link>
  );
}

export default NavLink