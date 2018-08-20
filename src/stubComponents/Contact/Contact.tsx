import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import s from "./Contact.css";

@withStyles(s)
class Contact extends PureComponent {
  public render() {
    return (
      <a className={s.root} type="email" href="mailto:dmitriy@borodin.site">
        <span>{"contact me now".toLocaleUpperCase()}</span>
      </a>
    );
  }
}

export default Contact;
