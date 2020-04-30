import React from "react";
import "antd/dist/antd.css";
import Heading from ".";

export default {
  title: "Componentes/Heading",
  decorators: [
    (storyFn) => (
      <div
        style={{
          backgroundColor: "#DE4B4B",
          width: "100vw",
          height: "100vh",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export const Basic = () => (
  <Heading>Adicione um novo cartão de crédito</Heading>
);
