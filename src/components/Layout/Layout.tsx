import withStyles from "isomorphic-style-loader/withStyles";
import React, { PureComponent } from "react";
import s from "./Layout.css";

@withStyles(s)
export class Layout extends PureComponent<any, any> {
  private htmlElement: HTMLElement | null = null;

  constructor(props, context) {
    super(props, context);

    this.handleResize = this.handleResize.bind(this);
  }

  public handleResize() {
    if (this.htmlElement !== null) {
      const { width, height } = this.htmlElement.getBoundingClientRect();

      let baseFontSize = width / 1440;

      if (width >= 1440) {
        baseFontSize = Math.min(width / 1440, height / 960);
      } else if (width >= 1024 && width < 1440) {
        baseFontSize = Math.min(width / 1024, height / 768);
      } else {
        baseFontSize = Math.min(width / 375, height / 667);
      }

      this.htmlElement.style.cssText = `font-size: ${baseFontSize}px;`;
    }
  }

  public componentWillMount() {
    this.htmlElement = document.getElementsByTagName("html")[0];

    window.addEventListener("resize", this.handleResize);

    this.handleResize();
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  public render() {
    const { introduce, about } = this.props;

    return (
      <div className={s.root}>
        <div>{introduce}</div>
        <div>{about}</div>
      </div>
    );
  }
}
