import React from "react";
import { Steps as AntSteps } from "antd";
import classnames from "classnames";
import "./index.scss";

const { Step } = AntSteps;

const Steps = ({ className, ...otherProps }) => (
  <AntSteps
    type="navigation"
    className={classnames(className, "app-steps")}
    size="small"
    {...otherProps}
  >
    <Step title="Carrinho" />
    <Step title="Pagamento" />
    <Step title="Confirmação" />
  </AntSteps>
);

export default Steps;
