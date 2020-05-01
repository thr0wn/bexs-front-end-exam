import React, { useState } from "react";
import { Input as AntInput } from "antd";
import classnames from "classnames";
import "./index.scss";

const Input = ({ label, value, className, ...otherProps }) => {
  const [focus, setFocus] = useState(false);

  const labelClassName =
    focus || (value && value.length !== 0) ? "label label-float" : "label";

  return (
    <div
      className={classnames(className, "app-input")}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <AntInput {...otherProps} />
      <label className={labelClassName}>{label}</label>
    </div>
  );
};

export default Input;
