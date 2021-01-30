<script lang="typescript">
  import { onMount } from "svelte";
  import Ava from "./Ava.svelte";
  import Greeting from "./Greeting.svelte";
  import Contact from "./Contact.svelte";
  import Icons from "./Icons.svelte";
  import bgJPG from "./static/bg.jpg";
  import bgPNG from "./static/bg.png";

  let rootElement: HTMLElement | null = null;

  const setCSS = (url: string) => {
    if (rootElement) {
      rootElement.style.cssText = `
         background: url(${url}) no-repeat 50%;
         background-size: cover;
        `;
    }
  };

  onMount(() => {
    const img = new Image();

    img.src = bgJPG;

    img.onload = () => {
      setCSS(bgJPG);

      const goodImg = new Image();

      goodImg.src = bgPNG;

      goodImg.onload = () => {
        setCSS(bgPNG);
      };
    };
  });
</script>

<div bind:this={rootElement} class="root">
  <div>
    <Ava />
    <Greeting />
    <Contact />
    <Icons />
  </div>
</div>

<style lang="css">
  @import "./vars/index.css";

  .root {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #0e65e5, rgba(174, 124, 249, 0.8)),
      linear-gradient(#2057eb, #2057eb);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .root > div {
    width: 600rem;
  }

  @media (width >= 1024px) and (width < 1440px) {
    .root > div {
      width: 500rem;
    }
  }

  @media (width < 1024px) {
    .root > div {
      width: 300rem;
    }
  }
</style>
