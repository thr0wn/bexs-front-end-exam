import React from "react";
import "antd/dist/antd.css";
import Sidebar from ".";
import Heading from "../Heading";
import Link from "../Link";
import PaymentCard from "../PaymentCard";

export default {
  title: "Componentes/Sidebar",
};

export const Basic = () => (
  <Sidebar>
    <Link>Alterar forma de pagamento</Link>
    <Heading>Adicione um novo cartão de crédito</Heading>
    <PaymentCard />
  </Sidebar>
);

export const Mobile = () => (
  <Sidebar>
    <Link>
      <span>
        <strong>Etapa 2</strong>&nbsp;de 3
      </span>
    </Link>
    <Heading>Adicione um novo cartão de crédito</Heading>
    <PaymentCard />
  </Sidebar>
);

Mobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" },
  },
};
