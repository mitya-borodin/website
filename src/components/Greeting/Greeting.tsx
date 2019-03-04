import withStyles from "isomorphic-style-loader/withStyles";
import React, { PureComponent } from "react";
import s from "./Greeting.css";

@withStyles(s)
export class Greeting extends PureComponent {
  public render() {
    return (
      <div className={s.root}>
        <span className={s.first}>
          {"I’m "}
          <span>{"Dmitriy Borodin"}</span>
        </span>
        <span className={s.second}>{"Full-stack developer by Typescript"}</span>
      </div>
    );
  }
}
