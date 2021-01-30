<script lang="typescript">
  export let title: string = "front-end";
  export let li: string[] = [
    "React",
    "React Native",
    "Svelte",
    "Mobx",
    "Corodva",
    "Snowpack",
    "Webpack",
  ];
  export let color: "purple" | "blue" | "green" = "green";
</script>

<div class={`specialization ${color}`}>
  <div>{title.toUpperCase()}</div>
  <ul>
    {#each li as item}
      <li><span>{item}</span></li>
    {/each}
  </ul>
</div>

<style lang="css">
  @import "./vars/index.css";
  @media (width < 1024px) {
    .specialization {
      margin-bottom: 10rem;
    }
  }

  .specialization > div {
    width: 119rem;
    height: 32rem;
    text-align: center;
    color: white;
    line-height: 32rem;
    border-radius: 32rem;
    font-size: 12rem;
    font-weight: 600;
    cursor: default;
    margin: 0 auto;
  }

  .specialization > ul {
    display: block;
    list-style-type: disc;
    padding: 8rem 0 0 30rem;
    margin: 0;
  }

  .specialization li {
    display: list-item;
  }

  .specialization li > span {
    font-size: 15rem;
    font-family: var(--font-family);
    line-height: 24rem;
    font-weight: 300;
    color: var(--color-text-section-p);
  }

  .purple > div {
    background-color: var(--color-purple);
  }

  .blue > div {
    background-color: var(--color-blue);
  }

  .green > div {
    background-color: var(--color-green);
  }

  .purple li {
    color: var(--color-purple);
  }

  .blue li {
    color: var(--color-blue);
  }

  .green li {
    color: var(--color-green);
  }
</style>
