import normalize from "normalize.css";
import { App } from "pages/App/App";
import React from "react";
import ReactDOM from "react-dom";

let container;
const context = {
  insertCss: (...styles) => {
    // eslint-disable-next-line no-underscore-dangle
    const removeCss = styles.map((x) => x._insertCss());

    return () => {
      removeCss.forEach((f) => f());
    };
  },
};
const run = (Component) => {
  ReactDOM.render(<Component context={context} />, container);
};

document.addEventListener("DOMContentLoaded", () => {
  container = document.createElement("div");

  document.body.appendChild(container);

  normalize._insertCss();

  run(App);
});

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}

declare var module: any;

if (module.hot) {
  module.hot.accept("pages/App", () => {
    run(require("pages/App").App);
  });
}
