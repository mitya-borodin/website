<script lang="typescript">
  import { onMount } from "svelte";
  import avaJPG from "./static/ava.jpg";

  const curlyBracesLeft = "{";
  const curlyBracesRight = "}";
  let img: HTMLImageElement | null = null;

  onMount(() => {
    const memoryIMG = new Image();

    memoryIMG.src = avaJPG;

    memoryIMG.onload = () => {
      if (img) {
        img.src = memoryIMG.src;
      }
    };
  });
</script>

<div class="wrapper">
  <div class="root">
    <div class="letters">
      <span class="curlyBraceLeft">{curlyBracesLeft}</span>
      <span class="curlyBraceRight">{curlyBracesRight}</span>
      <span class="plus">{"+"}</span>
      <div class="circleRight" />
      <div class="circleLeft" />
      <div class="rect" />
    </div>
    <img bind:this={img} alt="avatar" />
  </div>
</div>

<style lang="css">
  @import "./vars/index.css";

  .wrapper {
    margin-left: calc(50% - 120rem);
    padding-top: 190rem;
    margin-bottom: 70rem;
  }

  .root {
    width: 240rem;
    height: 240rem;
    position: relative;
  }

  .root > img {
    width: 240rem;
    height: 240rem;
    border: 4rem solid var(--color-about-bg);
    border-radius: 240rem;
  }

  .letters {
    position: absolute;
    bottom: 50%;
    left: 50%;
  }

  .curlyBraceLeft {
    position: absolute;
    font-size: 48rem;
    font-family: var(--font-family);
    font-weight: 500;
    color: var(--color-about-bg);
    top: -150rem;
    left: -160rem;
  }

  .curlyBraceRight {
    position: absolute;
    font-size: 48rem;
    font-family: var(--font-family);
    font-weight: 500;
    color: var(--color-about-bg);
    top: 80rem;
    left: 110rem;
  }

  .plus {
    position: absolute;
    font-size: 48rem;
    font-family: var(--font-family);
    font-weight: 500;
    color: var(--color-about-bg);
    left: 70rem;
    top: -230rem;
  }

  .circleRight {
    position: absolute;
    width: 25rem;
    height: 25rem;
    border: solid 6rem var(--color-about-bg);
    opacity: 0.5;
    border-radius: 20rem;
    top: -120rem;
    left: 190rem;
  }

  .circleLeft {
    position: absolute;
    width: 25rem;
    height: 25rem;
    border: solid 6rem var(--color-about-bg);
    opacity: 0.5;
    border-radius: 20rem;
    top: 120rem;
    left: -100rem;
  }

  .rect {
    position: absolute;
    top: 15rem;
    left: -220rem;
    opacity: 0.5;
    background-color: var(--color-about-bg);
    width: 6rem;
    height: 26rem;
  }

  @media (width < 1024px) {
    .wrapper {
      margin-left: calc(50% - 78.7rem);
      margin-bottom: 60rem;
      padding-top: 115rem;
    }
    .root {
      width: 157.4rem;
      height: 157.4rem;
    }
    .root > img {
      width: 157.4rem;
      height: 157.4rem;
      border-radius: 157.4rem;
    }

    .curlyBraceLeft {
      position: absolute;
      font-size: 48rem;
      font-family: var(--font-family);
      font-weight: 500;
      color: var(--color-about-bg);
      top: -90rem;
      left: -115rem;
    }

    .curlyBraceRight {
      position: absolute;
      font-size: 48rem;
      font-family: var(--font-family);
      font-weight: 500;
      color: var(--color-about-bg);
      top: 60rem;
      left: 80rem;
    }

    .plus {
      position: absolute;
      font-size: 48rem;
      font-family: var(--font-family);
      font-weight: 500;
      color: var(--color-about-bg);
      left: 35rem;
      top: -160rem;
    }

    .circleRight {
      position: absolute;
      width: 25rem;
      height: 25rem;
      border: solid 6rem var(--color-about-bg);
      opacity: 0.5;
      border-radius: 20rem;
      width: 18rem;
      height: 18rem;
      top: -75rem;
      left: 134rem;
      border: solid 5rem var(--color-about-bg);
      border-radius: 18rem;
    }

    .circleLeft {
      position: absolute;
      width: 25rem;
      height: 25rem;
      border: solid 6rem var(--color-about-bg);
      opacity: 0.5;
      border-radius: 20rem;
      width: 18rem;
      height: 18rem;
      top: 110rem;
      left: -90rem;
      border: solid 5rem var(--color-about-bg);
      border-radius: 18rem;
    }

    .rect {
      left: -150rem;
      top: 20rem;
      width: 4rem;
      height: 17rem;
    }
  }

  @media (width >= 1024px) and (width < 1440px) {
    .wrapper {
      margin-left: calc(50% - 98.35rem);
      margin-bottom: 85rem;
      padding-top: 130rem;
    }
    .root {
      width: 196.7rem;
      height: 196.7rem;
    }
    .root > img {
      width: 196.7rem;
      height: 196.7rem;
      border-radius: 196.7rem;
    }

    .curlyBraceLeft {
      position: absolute;
      font-size: 48rem;
      font-family: var(--font-family);
      font-weight: 500;
      color: var(--color-about-bg);
      top: -120rem;
      left: -140rem;
    }

    .curlyBraceRight {
      position: absolute;
      font-size: 48rem;
      font-family: var(--font-family);
      font-weight: 500;
      color: var(--color-about-bg);
      top: 70rem;
      left: 100rem;
    }

    .plus {
      position: absolute;
      font-size: 48rem;
      font-family: var(--font-family);
      font-weight: 500;
      color: var(--color-about-bg);
      left: 45rem;
      top: -210rem;
    }

    .circleRight {
      position: absolute;
      width: 25rem;
      height: 25rem;
      border: solid 6rem var(--color-about-bg);
      opacity: 0.5;
      border-radius: 20rem;
      width: 18rem;
      height: 18rem;
      top: -100rem;
      left: 160rem;
      border: solid 4rem var(--color-about-bg);
      border-radius: 18rem;
    }

    .circleLeft {
      position: absolute;
      width: 25rem;
      height: 25rem;
      border: solid 6rem var(--color-about-bg);
      opacity: 0.5;
      border-radius: 20rem;
      width: 18rem;
      height: 18rem;
      top: 110rem;
      left: -90rem;
      border: solid 4rem var(--color-about-bg);
      border-radius: 18rem;
    }

    .rect {
      left: -190rem;
      width: 6rem;
      height: 21rem;
    }
  }
</style>
