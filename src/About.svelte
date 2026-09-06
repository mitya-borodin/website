<script lang="typescript">
  import Specializations from "./Specializations.svelte";
  import TechnologiesIUse from "./TechnologiesIUse.svelte";
  import TextSection from "./TextSection.svelte";

  const workSince = new Date(2013, 8, 1);
  const now = new Date();
  const hasReachedWorkAnniversary =
    now.getMonth() > workSince.getMonth() ||
    (now.getMonth() === workSince.getMonth() && now.getDate() >= workSince.getDate());
  const yearsOfExperience =
    now.getFullYear() - workSince.getFullYear() - (hasReachedWorkAnniversary ? 0 : 1);
</script>

<div class="root">
  <div>
    <TextSection
      title={"About Me"}
      body={[
        `I am a Senior Full-stack Developer with ${yearsOfExperience}+ years of commercial software
        engineering experience. I design and build production systems with TypeScript and Node.js
        across backend, frontend, distributed services, databases, CI/CD, and infrastructure.`,
        `I take ownership of the full engineering lifecycle: discovery, architecture, implementation,
        code review, automated testing, delivery, observability, and production support. I am based
        in Kazan, Russia (UTC+3), and I am interested in remote Senior Full-stack Developer roles.`,
      ]}
    />
    <Specializations />
    <TechnologiesIUse />
    <TextSection
      title={"Current focus"}
      body={[
        `Since 2022, I have been building Module, an offline-first building-automation platform.
        It combines a TypeScript and Node.js controller runtime, a schema-driven React interface,
        a cloud control plane, and an automated Installer and Agent update pipeline.`,
        `The production installation manages more than 120 physical devices and runs 78 automation
        instances. I also use AI agents throughout the engineering lifecycle and build tooling for
        reproducible, verifiable AI-assisted delivery.`,
      ]}
    />
    <TextSection
      title={"Selected impact"}
      body={[
        `Migrated 13 microservices from ICE to gRPC without production downtime or major incidents.`,
        `Built a payment platform that sustained up to 5,000 payments per minute in load testing.`,
        `Developed enterprise systems handling data for up to 300,000 employees and report archives
        up to 3–4 GB.`,
        `Created TypeScript tools that validate Figma contracts and verify implementations through
        Storybook, Playwright, and CI.`,
      ]}
    />
  </div>
</div>

<style lang="css">
  @import "./vars/index.css";

  .root {
    width: 100%;
    height: 100%;
    font-size: 18rem;
    font-family: var(--font-family);
    background-color: var(--color-about-bg);
    overflow: auto;
  }

  .root > div {
    padding: 37rem 138rem;
  }

  @media (width >= 1024px) and (width < 1440px) {
    .root > div {
      padding: 32rem 34rem;
    }
  }

  @media (width < 1024px) {
    .root {
      height: auto;
    }
    .root > div {
      padding: 25rem 20rem;
    }
  }
</style>
