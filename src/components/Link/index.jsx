import React from "react";
import { Button } from "antd";
import classnames from "classnames";
import { LeftOutlined } from "@ant-design/icons";
import "./index.scss";

const Link = ({ children, className, ...otherProps }) => (
  <Button
    type="link"
    icon={<LeftOutlined />}
    ghost
    className={classnames(className, "app-link")}
    {...otherProps}
  >
    {children}
  </Button>
);

export default Link;
