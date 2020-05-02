import React, { useState } from "react";
import { Form } from "antd";
import classnames from "classnames";
import valid from "card-validator";
import Sidebar from "../Sidebar";
import Heading from "../Heading";
import Link from "../Link";
import PaymentCard from "../PaymentCard";
import CheckoutContent from "./CheckoutContent";
import "./index.scss";

const Checkout = ({ className, ...otherProps }) => {
  const [form] = Form.useForm();
  const [focused, setFocused] = useState("");
  const [, update] = useState();

  const values = form.getFieldsValue() || {};

  const validCardNumber = valid.number(values.number).isValid;

  const onFocus = (evt) => setFocused(evt.target.name);
  const onBlur = () => setFocused("");

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return (
    <article className={classnames(className, "app-checkout")} {...otherProps}>
      <section className="app-checkout__sidebar-wrapper">
        <Sidebar>
          <Link>Alterar forma de pagamento</Link>
          <Heading>Adicione um novo cartão de crédito</Heading>
          <PaymentCard
            number={values.number}
            name={values.name}
            expiry={values.expiry}
            cvc={values.cvc}
            focused={focused}
          />
        </Sidebar>
      </section>
      <section className="app-checkout__content-wrapper">
        <CheckoutContent
          form={form}
          update={update}
          validCardNumber={validCardNumber}
          onFocus={onFocus}
          onBlur={onBlur}
          onFinish={onFinish}
        />
      </section>
    </article>
  );
};

export default Checkout;
