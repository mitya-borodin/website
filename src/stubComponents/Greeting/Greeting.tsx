import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, {PureComponent} from "react";
import s from "./Greeting.css";

class Greeting extends PureComponent {
  render() {
    return (
      <div className={s.root}>
        <span className={s.first}>I’m <span>Dmitriy Borodin</span></span>
        <span className={s.second}>Full-stack developer by Javascript</span>
      </div>
    );
  }
}

export default withStyles(s)(Greeting);
