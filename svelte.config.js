const autoPreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config.js");

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: "typescript",
    },
    postcss,
  }),
};
