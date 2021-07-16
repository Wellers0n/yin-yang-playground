import { themes } from "mdx-deck";

const { dark, future } = themes;

export default {
  ...dark,
  ...future,
  colors: {
    // ...themes.colors,
    background: "#272425",
  },
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
