import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, {PureComponent} from "react";
import avaJPG from "static/ava.jpg";
import executionEnvironment from "utils/ExecutionEnvironment";
import s from "./Ava.css";

const curlyBracesLeft = "{";
const curlyBracesRight = "}";

class Ava extends PureComponent {
  avaEl: HTMLImageElement | null = null;

  componentWillMount() {
    if (executionEnvironment.canUseDOM) {
      const avaImg = new Image();

      avaImg.src = avaJPG;

      avaImg.onload = () => {
        this.avaEl.src = avaJPG;
      };
    }
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.root}>
          <div className={s.letters}>
            <span className={s.curlyBraceLeft}>{curlyBracesLeft}</span>
            <span className={s.curlyBraceRight}>{curlyBracesRight}</span>
            <span className={s.plus}>{"+"}</span>
            <div className={s.circleRight}/>
            <div className={s.circleLeft}/>
            <div className={s.rect}/>
          </div>
          <img ref={(element) => this.avaEl = element}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Ava);
