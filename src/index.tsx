import StyleContext from "isomorphic-style-loader/StyleContext";
import normalize from "normalize.css";
import { App } from "pages/App/App";
import React from "react";
import ReactDOM from "react-dom";

let container;
const insertCss = (...styles: any[]) => {
  const removeCss = styles.map((style_item: any) => style_item._insertCss());

  return () => removeCss.forEach((dispose) => dispose());
};

const render = (Component) => {
  ReactDOM.render(
    <StyleContext.Provider value={{ insertCss }}>
      <Component />
    </StyleContext.Provider>,
    container,
  );
};

document.addEventListener("DOMContentLoaded", () => {
  container = document.createElement("div");

  document.body.appendChild(container);

  normalize._insertCss();

  render(App);
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
    render(require("pages/App").App);
  });
}

declare var process: { env: { NODE_ENV: string } };

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
