import React, { useState } from "react";
import "antd/dist/antd.css";
import Input from ".";

export default {
  title: "Componentes/Input",
  decorators: [
    (storyFn) => (
      <div
        style={{
          padding: 8,
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export const Basic = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Nome (igual ao cartão)"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
    />
  );
};
