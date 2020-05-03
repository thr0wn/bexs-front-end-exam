import React from "react";
import "antd/dist/antd.css";
import Checkout from ".";

export default {
  title: "Pages/Checkout",
};

export const Basic = () => <Checkout />;

export const Mobile = () => <Checkout />;

Mobile.story = {
  parameters: {
    viewport: { defaultViewport: "iphone5" },
  },
};
