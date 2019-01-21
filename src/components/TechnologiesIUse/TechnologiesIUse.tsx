import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import s from "./TechnologiesIUse.css";

@withStyles(s)
export class TechnologiesIUse extends PureComponent {
  public render() {
    return (
      <section className={s.root}>
        <h1>{"Technologies i use".toUpperCase()}</h1>
        <div>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Object-oriented_programming">
            {"OOP"}
          </a>
          <a target="_blank" href="https://en.wikipedia.org/wiki/SOLID">
            {"SOLID"}
          </a>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Design_Patterns">
            {"Design patterns"}
          </a>
          <a target="_blank" href="https://12factor.net/">
            {"The Twelve-Factor App"}
          </a>
          <a target="_blank" href="https://www.w3.org/TR/html5/">
            {"HTML5"}
          </a>
          <a target="_blank" href="https://www.w3.org/Style/CSS/specs.ru.html">
            {"CSS3"}
          </a>
          <a target="_blank" href="https://stylelint.io/">
            {"Stylelint"}
          </a>
          <a target="_blank" href="https://www.typescriptlang.org/">
            {"Typescript"}
          </a>
          <a target="_blank" href="https://palantir.github.io/tslint/">
            {"TSlint"}
          </a>
          <a target="_blank" href="https://facebook.github.io/react/">
            {"React"}
          </a>
          <a target="_blank" href="https://mobx.js.org/">
            {"Mobx"}
          </a>
          <a target="_blank" href="https://facebook.github.io/react-native/">
            {"React Native"}
          </a>
          <a target="_blank" href="https://cordova.apache.org/">
            {"Cordova"}
          </a>
          <a target="_blank" href="https://www.npmjs.com/package/rearguard">
            {"Rearguard"}
          </a>
          <a target="_blank" href="https://nodejs.org/en/">
            {"Node.JS"}
          </a>
          <a target="_blank" href="https://www.mongodb.com/">
            {"MongoDB"}
          </a>
          <a target="_blank" href="https://mongodb.github.io/node-mongodb-native/">
            {"Mongo native driver"}
          </a>
          <a target="_blank" href="https://www.npmjs.com/package/ws">
            {"WS"}
          </a>
          <a target="_blank" href="https://www.docker.com/">
            {"Docker"}
          </a>
          <a target="_blank" href="https://mochajs.org/">
            {"Mocha, Chai, Sinon.js"}
          </a>
          <a target="_blank" href="https://airbnb.io/enzyme/">
            {"Enzyme"}
          </a>
          <a target="_blank" href="https://webdriver.io/">
            {"Webdriver.IO"}
          </a>
        </div>
      </section>
    );
  }
}
