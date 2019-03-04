import withStyles from "isomorphic-style-loader/withStyles";
import React, { PureComponent } from "react";
import s from "./TextSection.css";

interface IProps {
  title: string;
  body: string | string[];
}

@withStyles(s)
export class TextSection extends PureComponent<IProps, any> {
  public render() {
    const { title, body } = this.props;

    if (Array.isArray(body)) {
      return (
        <section className={s.root}>
          <h1>{title.toUpperCase()}</h1>
          {body.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </section>
      );
    }

    return (
      <section className={s.root}>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
      </section>
    );
  }
}
