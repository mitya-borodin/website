import withStyles from "isomorphic-style-loader/withStyles";
import React, { PureComponent } from "react";
import s from "./Contact.css";

@withStyles(s)
export class Contact extends PureComponent {
  public render() {
    return (
      <a className={s.root} type="email" href="mailto:dmitriy@borodin.site">
        <span>{"contact me now".toLocaleUpperCase()}</span>
      </a>
    );
  }
}
