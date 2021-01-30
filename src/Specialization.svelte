<script lang="typescript">
  export let title: string = "front-end";
  export let li: string[] = ["React", "Mobx", "Moment", "React Native", "Corodva"];
</script>

<div class="specialization">
  <div>{title.toUpperCase()}</div>
  <ul>
    {#each li as item}
      <li><span>{item}</span></li>
    {/each}
  </ul>
</div>

<style lang="css">
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
</style>
