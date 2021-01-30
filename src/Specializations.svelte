<script lang="typescript">
  import Specialization from "./Specialization.svelte";
</script>

<section class="root">
  <h1>{"Specializations".toUpperCase()}</h1>
  <div>
    <div>
      <Specialization
        title="Main"
        li={[
          "DDD",
          "OOP",
          "SOLID",
          "YAGNI",
          "DRY",
          "KISS",
          "Design patterns",
          "Software design",
          "Software architecture",
          "Typescript",
          "RTCTS",
        ]}
        color="purple"
      />
    </div>
    <div>
      <Specialization color="blue" />
    </div>
    <div>
      <Specialization
        title="Back-end"
        li={[
          "Node.js",
          "Koa",
          "Express",
          "Nest.js",
          "Real time apps",
          "Message Queuing",
          "MongoDB",
          "Docker",
          "Kubernetes",
          "Helm",
          "Terraform",
        ]}
        color="green"
      />
    </div>
  </div>
</section>

<style lang="css">
  @import "./vars/index.css";

  .root {
    width: 100%;
    margin-bottom: 45rem;
  }

  .root > h1 {
    font-size: 14rem;
    font-family: var(--font-family);
    font-weight: 700;
    text-align: left;
    color: var(--color-text-section-h1);
    margin-bottom: 27rem;
  }

  .root > div {
    display: flex;
  }

  .root > div > div {
    width: 50%;
  }

  @media (width < 1024px) {
    .root {
      margin-bottom: 12rem;
    }
    .root > h1 {
      text-align: center;
      margin-bottom: 16rem;
    }
    .root > div {
      flex-direction: column;
    }

    .root > div > div {
      width: 100%;
    }
  }
</style>
