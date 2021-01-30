<div class="root">
  <span class="first"> {"I’m "} <span>{"Dmitriy Borodin"}</span> </span>
  <span class="second">{"Full-stack developer by Typescript"}</span>
</div>

<style lang="css">
  @import "./vars/index.css";

  .root {
    width: 600rem;
    height: 104rem;
    margin-bottom: 50rem;
    margin-left: calc(50% - 600rem / 2);

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 32rem;
    font-family: var(--font-family);
    font-weight: 600;
    line-height: 52rem;
  }

  .first {
    color: #ffffff;
    display: block;
  }

  .first > span {
    display: inline;
    text-align: center;
    color: var(--color-green);
  }

  .second {
    text-align: center;
    color: #ffffff;
    display: block;
  }

  @media (width < 1024px) {
    .root {
      width: 300rem;
      height: 100rem;
      margin-bottom: 35rem;
      margin-left: calc(50% - 300rem / 2);

      font-size: 21rem;
      font-family: var(--font-family);
      line-height: 32rem;
    }
  }

  @media (width >= 1024px) and (width < 1440px) {
    .root {
      width: 430rem;
      height: 80rem;
      margin-bottom: 35rem;
      margin-left: calc(50% - 430rem / 2);

      font-size: 26rem;
      font-family: var(--font-family);
      line-height: 40rem;
    }
  }
</style>
