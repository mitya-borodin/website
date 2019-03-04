import { AboutMe } from "components/AboutMe/AboutMe";
import { Layout } from "components/Layout/Layout";
import { Me } from "components/Me/Me";
import StyleContext from "isomorphic-style-loader/StyleContext";
import "normalize.css";
import React, { PureComponent } from "react";
import s from "./App.css";

export class App extends PureComponent<any, any> {
  public static contextType = StyleContext;

  private removeCSS: () => void;

  constructor(props, context) {
    super(props, context);

    this.removeCSS = this.context.insertCss(s);
  }

  public componentWillUnmount() {
    this.removeCSS();
  }

  public render() {
    return <Layout introduce={<Me />} about={<AboutMe />} />;
  }
}
