import React from "react";
import Cards from "react-credit-cards";
import classnames from "classnames";
import "./index.scss";

const PaymentCard = ({
  className,
  cvc,
  expiry,
  focus,
  name,
  number,
  ...otherProps
}) => (
  <div className={classnames(className, "app-payment-card")}>
    <Cards
      cvc={cvc || ""}
      expiry={expiry || ""}
      focus={focus || ""}
      name={name || ""}
      number={number || ""}
      placeholders={{
        name: "NOME DO TITULAR"
      }}
      locale={{
        valid: "",
      }}
      {...otherProps}
    />
  </div>
);

export default PaymentCard;
