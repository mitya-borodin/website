<script lang="typescript">
  import Specializations from "./Specializations.svelte";
  import TechnologiesIUse from "./TechnologiesIUse.svelte";
  import TextSection from "./TextSection.svelte";
</script>

<div class="root">
  <div>
    <TextSection
      title={"About Me"}
      body={[
        `Hello, my name is Borodin Dmitriy and I am open-minded and hardworking software engineer.
        I have been developing software for 5+ years.
        I live in the time zone of Moscow (GMT +03:00), and I like to work remotely,
        but I do not mind working in the office if the road does not take more than 30 minutes.`,
      ]}
    />
    <Specializations />
    <TechnologiesIUse />
    <TextSection
      title={"The area of my work involves"}
      body={[
        `Solving business problems by means of programming.
        I create full-fledged multi-user cross-platform solutions that work in real time using WEB
        and DevOps technologies.`,
      ]}
    />
    <TextSection
      title={"My experience"}
      body={[
        `I am sure that the creation of an understandable and predictable system based on principles and templates
           of programming makes it possible to effectively separate work between people, keep the growth
            of the complexity of the system at one level, and also maintain maintainability.`,
        `I allocate the code which can be used repeatedly in separate npm packages and connect as dependencies.`,
        ` I believe that adhere to principles of architectural is more important than a concrete implementation,
           because making local fixes is easier than fixe an architecture error.`,
        `In conditions of insufficient time, I give priority to solving the problem in any accessible way,
           but at the next stage of development I will perform the refactoring of the solution.`,
        `To achieve success in the team, first of all you need to agree on the rules of the game.`,
        `Can to recognize unsuccessful decisions and mistakes, take them and gain experience.`,
        `Premature automation is harmful, but timely automation significantly saves time.`,
        `If you need a lot of time to learn technology, you need to hire a specialist who already knows the
           technology.`,
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
