import React from "react";
import "antd/dist/antd.css";
import Link from ".";

export default {
  title: "Link",
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

export const Basic = () => <Link>Alterar forma de pagamento</Link>;
