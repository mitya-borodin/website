<script lang="typescript">
</script>

<section class="root">
  <h1>{"Technologies i use".toUpperCase()}</h1>
  <div>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Object-oriented_programming">
      {"OOP"}
    </a>
    <a target="_blank" href="https://en.wikipedia.org/wiki/SOLID"> {"SOLID"} </a>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Design_Patterns">
      {"Design patterns"}
    </a>
    <a target="_blank" href="https://12factor.net/"> {"The Twelve-Factor App"} </a>
    <a target="_blank" href="https://www.w3.org/TR/html5/"> {"HTML5"} </a>
    <a target="_blank" href="https://www.w3.org/Style/CSS/specs.ru.html"> {"CSS3"} </a>
    <a target="_blank" href="https://stylelint.io/"> {"Stylelint"} </a>
    <a target="_blank" href="https://www.typescriptlang.org/"> {"Typescript"} </a>
    <a target="_blank" href="https://facebook.github.io/react/"> {"React"} </a>
    <a target="_blank" href="https://mobx.js.org/"> {"Mobx"} </a>
    <a target="_blank" href="https://facebook.github.io/react-native/"> {"React Native"} </a>
    <a target="_blank" href="https://cordova.apache.org/"> {"Cordova"} </a>
    <a target="_blank" href="https://www.npmjs.com/package/rearguard"> {"Rearguard"} </a>
    <a target="_blank" href="https://nodejs.org/en/"> {"Node.JS"} </a>
    <a target="_blank" href="https://www.mongodb.com/"> {"MongoDB"} </a>
    <a target="_blank" href="https://mongodb.github.io/node-mongodb-native/">
      {"Mongo native driver"}
    </a>
    <a target="_blank" href="https://www.npmjs.com/package/ws"> {"WS"} </a>
    <a target="_blank" href="https://www.docker.com/"> {"Docker"} </a>
    <a target="_blank" href="https://mochajs.org/"> {"Mocha, Chai, Sinon.js"} </a>
    <a target="_blank" href="https://airbnb.io/enzyme/"> {"Enzyme"} </a>
    <a target="_blank" href="https://webdriver.io/"> {"Webdriver.IO"} </a>
  </div>
</section>

<style lang="css">
  @import "./vars/index.css";

  .root {
    width: 100%;
    margin-bottom: 40rem;
  }

  .root > h1 {
    font-size: 14rem;
    font-family: var(--font-family);
    font-weight: 700;
    text-align: left;
    color: var(--color-text-section-h1);
    margin-bottom: 19rem;
  }

  .root > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .root > div > a {
    border-radius: 32rem;
    background-color: var(--color-yellow);
    text-align: center;
    padding: 7rem 16rem 8rem;
    font-size: 14rem;
    font-family: var(--font-family);
    font-weight: 600;
    line-height: 19rem;
    margin-bottom: 8rem;
    margin-right: 8rem;
    cursor: pointer;
    color: var(--color-yellow-text);
    text-decoration: none;
  }

  .root > div > a:hover {
    background-color: var(--color-yellow-hover);
  }

  @media (width < 1024px) {
    .root {
      margin-bottom: 32rem;
    }
    .root > h1 {
      text-align: center;
    }
  }
</style>
