import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import s from "./TextSection.css";

interface IProps {
  title: string;
  body: string;
}

@withStyles( s )
class TextSection extends PureComponent<IProps, any> {
  render() {
    const {
      title = "About Me",
      body = `Hello! My name is Dmitry. I leave in Kazan, Russia (GMT +03:00)
              I’m looking for a job with wage about $3 500 per month.
              I’m ready for remote work.`,
    } = this.props;

    return (
      <section className={ s.root }>
        <h1>{ title.toUpperCase() }</h1>
        <p>{ body }</p>
      </section>
    );
  }
}

export default TextSection;
