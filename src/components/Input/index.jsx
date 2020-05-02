import React, { useState } from "react";
import { Input as AntInput, InputNumber as AntInputNumber } from "antd";
import classnames from "classnames";
import "./index.scss";

const withFloatingLabel = (Component) => {
  const ComponentWithFloatingLabel = ({
    label,
    value,
    className,
    ...otherProps
  }) => {
    const [focus, setFocus] = useState(false);

    const labelClassName =
      focus || (value && value.length !== 0) ? "label label-float" : "label";

    return (
      <div
        className={classnames(className, "app-input")}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        <Component {...otherProps} />
        <label className={labelClassName}>{label}</label>
      </div>
    );
  };

  return ComponentWithFloatingLabel;
};

export const Input = withFloatingLabel(AntInput);

export const InputNumber = withFloatingLabel(AntInputNumber);

export default Input;
