import React from "react";
import { Button as AntButton } from "antd";
import classNames from "classnames";
import "./index.scss";

const Button = ({ children, className, ...otherProps }) => (
  <AntButton className={classNames(className, "app-button")} {...otherProps}>
    {children}
  </AntButton>
);

export default Button;
