import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, {PureComponent} from "react";
import s from "./Contact.css";

class Contact extends PureComponent {
  render() {
    return (
      <div className={s.root}>
        {"contact me now".toLocaleUpperCase()}
      </div>
    );
  }
}

export default withStyles(s)(Contact);
