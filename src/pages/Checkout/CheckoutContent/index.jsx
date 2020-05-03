import React from "react";
import { Form, Select } from "antd";
import { Row, Col, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import classnames from "classnames";
import moment from "moment";
import { Input, InputNumber } from "../../../components/Input";
import Steps from "../../../components/Steps";
import Button from "../../../components/Button";
import "./index.scss";

const CheckoutContent = ({
  form,
  update,
  validCardNumber,
  onFocus,
  onBlur,
  onFinish,
  className,
  ...otherProps
}) => (
  <Form
    form={form}
    className={classnames(className, "app-checkout__content")}
    onValuesChange={update}
    onFinish={onFinish}
    {...otherProps}
  >
    <Row>
      <Col span={24}>
        <Steps current={1} />
      </Col>
      <Col span={24}>
        <Form.Item
          name="number"
          rules={[
            { required: true, message: "Campo obrigatório" },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.resolve();
                } else if (validCardNumber) {
                  return Promise.resolve();
                } else {
                  return Promise.reject("Número de cartão inválido");
                }
              },
            },
          ]}
        >
          <InputNumber
            name="number"
            type="number"
            label="Número do cartão"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Campo obrigatório" },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.resolve();
                } else if (value.split(" ").filter((w) => w).length > 1) {
                  return Promise.resolve();
                } else {
                  return Promise.reject("Insira seu nome completo");
                }
              },
            },
          ]}
        >
          <Input
            name="name"
            label="Nome (igual ao cartão)"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item
              name="expiry"
              maxLength={4}
              rules={[
                { required: true, message: "Campo obrigatório" },
                {
                  validator: (_, value) => {
                    if (!value) {
                      return Promise.resolve();
                    }
                    const date = moment(value, "MM/YY");
                    if (value.length === 5 && date.isValid()) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject("Data inválida");
                    }
                  },
                },
              ]}
            >
              <Input name="expiry" label="Validade" onFocus={onFocus} onBlur={onBlur} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Tooltip
              placement="topLeft"
              title="Código de segurança de 3 dígitos, impresso no verso do cartão. "
            >
              <Form.Item
                name="cvc"
                rules={[
                  { required: true, message: "Campo obrigatório" },
                  {
                    validator: (_, value) => {
                      if (!value) {
                        return Promise.resolve();
                      } else if (value.length !== 1) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject("Código inválido");
                      }
                    },
                  },
                ]}
              >
                <Input
                  name="cvc"
                  maxLength={3}
                  label={
                    <span>
                      CVV <InfoCircleOutlined />
                    </span>
                  }
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </Form.Item>
            </Tooltip>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Form.Item
          name="method"
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <Select placeholder="Número de parcelas">
            <Select.Option value="1">1x parcela sem juros</Select.Option>
            <Select.Option value="2">2x parcelas sem juros</Select.Option>
            <Select.Option value="3">3x parcelas sem juros</Select.Option>
            <Select.Option value="4">4x parcelas sem juros</Select.Option>
            <Select.Option value="5">5x parcelas sem juros</Select.Option>
            <Select.Option value="6">6x parcelas sem juros</Select.Option>
            <Select.Option value="7">7x parcelas sem juros</Select.Option>
            <Select.Option value="8">8x parcelas sem juros</Select.Option>
            <Select.Option value="9">9x parcelas sem juros</Select.Option>
            <Select.Option value="10">10x parcelas sem juros</Select.Option>
            <Select.Option value="11">11x parcelas sem juros</Select.Option>
            <Select.Option value="12">12x parcelas sem juros</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Row justify="end">
          <Col>
            <Button htmlType="submit">CONTINUAR</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Form>
);

export default CheckoutContent;
