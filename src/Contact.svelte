<a class="root" type="email" href="mailto:dmitriy@borodin.site">
  <span>{"contact me now".toLocaleUpperCase()}</span>
</a>

<style lang="css">
  @import "./vars/index.css";

  .root {
    display: block;
    flex-shrink: 0;
    margin-left: calc(50% - 235rem / 2);
    width: 235rem;
    height: 61rem;
    background-color: var(--color-blue);
    border-radius: 50rem;
    line-height: 61rem;
    text-align: center;
    font-size: 14rem;
    font-family: var(--font-family);
    font-weight: 600;
    text-decoration: none;
    color: var(--color-about-bg);
    cursor: pointer;
  }

  .root:hover {
    cursor: pointer;
    background-color: var(--color-blue-hover);
  }

  @media (width < 1024px) {
    .root {
      width: 172rem;
      height: 40rem;
      margin-left: calc(50% - 172rem / 2);
      line-height: 40rem;
      font-size: 12rem;
      font-family: var(--font-family);
    }
  }
</style>
