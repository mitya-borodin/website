import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import s from "./Specializations.css";

const Specialization = ({ title = "front-end", li = ["React", "Mobx", "Moment", "React Native", "Corodva"] }) => (
  <div className={s.specialization}>
    <div>{title.toUpperCase()}</div>
    <ul>
      {li.map((val) => (
        <li key={val}>
          <span>{val}</span>
        </li>
      ))}
    </ul>
  </div>
);

@withStyles(s)
export class Specializations extends PureComponent<any, any> {
  public render() {
    return (
      <section className={s.root}>
        <h1>{"Specializations".toUpperCase()}</h1>
        <div>
          <div className="purple">
            <Specialization title="Main" li={["OOP", "SOLID", "Design patterns", "Typescript", "TSLint"]} />
          </div>
          <div className="blue">
            <Specialization />
          </div>
          <div className="green">
            <Specialization
              title="back-end"
              li={["Node.js", "Real time system", "Message Queuing", "MongoDB", "Docker"]}
            />
          </div>
        </div>
      </section>
    );
  }
}
