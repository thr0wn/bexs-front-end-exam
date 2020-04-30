import React from "react";
import classnames from "classnames";
import "./index.scss";

const Sidebar = ({ className, children, ...otherProps }) => (
  <nav className={classnames(className, "app-sidebar")} {...otherProps}>
    {children}
  </nav>
);

export default Sidebar;
