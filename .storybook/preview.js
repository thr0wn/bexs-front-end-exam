import "!style-loader!css-loader!sass-loader!../src/index.scss";
import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
