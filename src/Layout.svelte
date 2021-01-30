<script lang="typescript">
  import { onDestroy, onMount } from "svelte";
  import About from "./About.svelte";
  import Introduce from "./Introduce.svelte";

  let htmlElement: HTMLElement | null = null;

  const handleResize = () => {
    if (htmlElement !== null) {
      const { width, height } = htmlElement.getBoundingClientRect();

      let baseFontSize = width / 1440;

      if (width >= 1440) {
        baseFontSize = Math.min(width / 1440, height / 960);
      } else if (width >= 1024 && width < 1440) {
        baseFontSize = Math.min(width / 1024, height / 768);
      } else {
        baseFontSize = Math.min(width / 375, height / 667);
      }

      htmlElement.style.cssText = `font-size: ${baseFontSize}px;`;
    }
  };

  onMount(() => {
    htmlElement = document.getElementsByTagName("html")[0];

    window.addEventListener("resize", handleResize);

    handleResize();
  });

  onDestroy(() => {
    window.removeEventListener("resize", handleResize);
  });
</script>

<div class="root">
  <div>
    <Introduce />
  </div>
  <div>
    <About />
  </div>
</div>

<style lang="css">
  @import "./vars/index.css";

  :global(html) {
    width: 100vw;
    height: 100vh;
  }

  .root {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-about-bg);
  }

  .root > div {
    width: 50%;
    height: 100%;
    float: left;
  }

  @media (width < 1024px) {
    .root {
      flex-direction: column;
    }
    .root > div {
      width: 100%;
    }
  }
</style>
