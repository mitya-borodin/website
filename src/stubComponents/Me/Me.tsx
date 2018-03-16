import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, {PureComponent} from "react";
import bgJPG from "static/bg.jpg";
import bgPNG from "static/bg.png";
import Ava from "stubComponents/Ava";
import Contact from "stubComponents/Contact";
import Greeting from "stubComponents/Greeting";
import Icons from "stubComponents/Icons";
import executionEnvironment from "utils/ExecutionEnvironment";
import s from "./Me.css";

class Me extends PureComponent {
  rootEl: HTMLElement | null = null;

  setCSS(url) {
    this.rootEl.style.cssText = `
         background: url(${url}) no-repeat 50%;
         background-size: cover;`;
  }

  componentWillMount() {
    if (executionEnvironment.canUseDOM) {
      const veryBabImg = new Image();

      veryBabImg.src = bgJPG;

      veryBabImg.onload = () => {
        this.setCSS(bgJPG);

        const goodImg = new Image();

        goodImg.src = bgPNG;

        goodImg.onload = () => {
          this.setCSS(bgPNG);
        };
      };
    }
  }

  render() {
    return (
      <div ref={(element) => this.rootEl = element} className={s.root}>
        <div>
          <Ava/>
          <Greeting/>
          <Contact/>
          <Icons/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Me);
