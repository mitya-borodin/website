<script lang="typescript">
  const technologies = [
    { title: "TypeScript", href: "https://www.typescriptlang.org/" },
    { title: "Node.js", href: "https://nodejs.org/" },
    { title: "React", href: "https://react.dev/" },
    { title: "MobX", href: "https://mobx.js.org/" },
    { title: "Fastify", href: "https://fastify.dev/" },
    { title: "GraphQL", href: "https://graphql.org/" },
    { title: "gRPC", href: "https://grpc.io/" },
    { title: "PostgreSQL", href: "https://www.postgresql.org/" },
    { title: "Redis", href: "https://redis.io/" },
    { title: "MQTT", href: "https://mqtt.org/" },
    { title: "Rust", href: "https://www.rust-lang.org/" },
    { title: "Docker", href: "https://www.docker.com/" },
    { title: "Kubernetes", href: "https://kubernetes.io/" },
    { title: "Vite", href: "https://vite.dev/" },
    { title: "Vitest", href: "https://vitest.dev/" },
    { title: "Storybook", href: "https://storybook.js.org/" },
    { title: "Playwright", href: "https://playwright.dev/" },
    { title: "Prometheus", href: "https://prometheus.io/" },
    { title: "GitHub Actions", href: "https://github.com/features/actions" },
  ];
</script>

<section class="root">
  <h1>{"Technologies I use".toUpperCase()}</h1>
  <div>
    {#each technologies as technology}
      <a target="_blank" rel="noopener noreferrer" href={technology.href}>
        {technology.title}
      </a>
    {/each}
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
