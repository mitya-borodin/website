import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent, RefObject } from "react";
import avaJPG from "static/ava.jpg";
import s from "./Ava.css";

const curlyBracesLeft = "{";
const curlyBracesRight = "}";

@withStyles(s)
export class Ava extends PureComponent {
  public img: RefObject<HTMLImageElement>;

  constructor(props) {
    super(props);

    this.img = React.createRef();
  }

  public componentWillMount() {
    const memoryIMG = new Image();

    memoryIMG.src = avaJPG;

    memoryIMG.onload = () => {
      if (this.img.current) {
        this.img.current.src = memoryIMG.src;
      }
    };
  }

  public render() {
    return (
      <div className={s.wrapper}>
        <div className={s.root}>
          <div className={s.letters}>
            <span className={s.curlyBraceLeft}>{curlyBracesLeft}</span>
            <span className={s.curlyBraceRight}>{curlyBracesRight}</span>
            <span className={s.plus}>{"+"}</span>
            <div className={s.circleRight} />
            <div className={s.circleLeft} />
            <div className={s.rect} />
          </div>
          <img ref={this.img} />
        </div>
      </div>
    );
  }
}
