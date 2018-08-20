import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import Specializations from "stubComponents/Specializations";
import TechnologiesIUse from "stubComponents/TechnologiesIUse";
import TextSection from "stubComponents/TextSection";
import s from "./AboutMe.css";

@withStyles(s)
class AboutMe extends PureComponent {
  public render() {
    return (
      <div className={s.root}>
        <div>
          <TextSection
            title={"About Me"}
            body={`Hello! My name is Dmitry. I leave in Kazan, Russia (GMT +03:00)
              I’m looking for a job with wage about $3 500 per month.
              I’m ready for remote work.`}
          />
          <Specializations />
          <TechnologiesIUse />
          <TextSection
            title={"How can I be of use"}
            body={`Hello! My name is Dmitry. I leave in Kazan, Russia (GMT +03:00)
              I’m looking for a job with wage about $3 500 per month.
              I’m ready for remote work.`}
          />
        </div>
      </div>
    );
  }
}

export default AboutMe;
