import React from "react";
import classNames from "classnames";
import "./index.scss";

const Link = ({ children, className, ...otherProps }) => (
  <a className={classNames(className, "app-link")} {...otherProps}>
    {children}
  </a>
);

export default Link;