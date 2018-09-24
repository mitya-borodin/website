import { AboutMe } from "components/AboutMe/AboutMe";
import { Layout } from "components/Layout/Layout";
import { Me } from "components/Me/Me";
import normalize from "normalize.css";
import propTypes from "prop-types";
import React, { PureComponent } from "react";
import s from "./App.css";

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: propTypes.func.isRequired,
};

export class App extends PureComponent<any, any> {
  public static propTypes = {
    context: propTypes.shape(ContextType).isRequired,
  };
  public static childContextTypes = ContextType;

  private removeCSS: () => void;

  public componentWillMount() {
    this.removeCSS = this.props.context.insertCss(normalize, s);
  }

  public componentWillUnmount() {
    this.removeCSS();
  }

  public getChildContext() {
    return this.props.context;
  }

  public render() {
    return <Layout introduce={<Me />} about={<AboutMe />} />;
  }
}
