import React from "react";
import { Typography } from "antd";
import classnames from "classnames";
import CardSVGIcon from '../../../public/icons/card.svg';
import "./index.scss";

const { Title } = Typography;

const Heading = ({ children, className, ...otherProps }) => (
  <div className={classnames(className, "app-heading")} {...otherProps}>
    <img className="app-title__svg" src={CardSVGIcon} />
    <Title>{children}</Title>
  </div>
);

export default Heading;
