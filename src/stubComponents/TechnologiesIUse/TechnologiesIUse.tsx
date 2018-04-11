import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import s from "./TechnologiesIUse.css";

@withStyles( s )
class TechnologiesIUse extends PureComponent {
  render() {
    return (
      <section className={ s.root }>
        <h1>{ "Technologies i use".toUpperCase() }</h1>
        <div>
          <a target="_blank" href="https://12factor.net/">{ "The Twelve-Factor App" }</a>
          <a target="_blank" href="https://www.typescriptlang.org/">{ "Typescript" }</a>
          <a target="_blank" href="https://www.w3.org/TR/html5/">{ "HTML5" }</a>
          <a target="_blank" href="https://www.w3.org/Style/CSS/specs.ru.html">{ "CSS3" }</a>
          <a target="_blank" href="https://facebook.github.io/react/">{ "React.js" }</a>
          <a target="_blank" href="https://infernojs.org/">{ "Infernojs" }</a>
          <a target="_blank" href="https://vuejs.org/">{ "Vue" }</a>
          <a target="_blank" href="https://mobx.js.org/">{ "Mobx" }</a>
          <a target="_blank" href="https://facebook.github.io/relay/">{ "Relay" }</a>
          <a target="_blank" href="https://facebook.github.io/react-native/">{ "React Native" }</a>
          <a target="_blank" href="https://webpack.js.org/">{ "Webpack" }</a>
          <a target="_blank" href="https://www.npmjs.com/package/rearguard">{ "Rearguard" }</a>
          <a target="_blank" href="https://www.docker.com/">{ "Docker" }</a>
          <a target="_blank" href="https://nodejs.org/en/">{ "Node.JS" }</a>
          <a target="_blank" href="https://www.mongodb.com/">{ "MongoDB" }</a>
          <a target="_blank" href="http://graphql.org/">{ "GraphQL" }</a>
          <a target="_blank" href="https://mochajs.org/">{ "Mocha, Chai, Sinon.js, Enzyme" }</a>
          <a target="_blank" href="https://palantir.github.io/tslint/">{ "TSlint, ESlint, Stylelint" }</a>
        </div>
      </section>
    );
  }
}

export default TechnologiesIUse;
