import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent, RefObject } from "react";
import bgJPG from "static/bg.jpg";
import bgPNG from "static/bg.png";
import Ava from "stubComponents/Ava";
import Contact from "stubComponents/Contact";
import Greeting from "stubComponents/Greeting";
import Icons from "stubComponents/Icons";
import s from "./Me.css";

@withStyles(s)
class Me extends PureComponent {
  public rootHTML_EL: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this.rootHTML_EL = React.createRef();
  }

  public setCSS(url) {
    const node = this.rootHTML_EL.current;

    if (node) {
      node.style.cssText = `
         background: url(${url}) no-repeat 50%;
         background-size: cover;`;
    }
  }

  public componentWillMount() {
    const img = new Image();

    img.src = bgJPG;

    img.onload = () => {
      this.setCSS(bgJPG);

      const goodImg = new Image();

      goodImg.src = bgPNG;

      goodImg.onload = () => {
        this.setCSS(bgPNG);
      };
    };
  }

  public render() {
    return (
      <div ref={this.rootHTML_EL} className={s.root}>
        <div>
          <Ava />
          <Greeting />
          <Contact />
          <Icons />
        </div>
      </div>
    );
  }
}

export default Me;
