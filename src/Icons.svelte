<script>
  import github from "./static/icons/Github_White.svg";
  import linkedIN from "./static/icons/LinkedIN_White.svg";
  import moikrug from "./static/icons/moikrug_White.svg";
  import skype from "./static/icons/Skype_White.svg";
  import telegram from "./static/icons/Telegram_White.svg";
  import whatsapp from "./static/icons/whatsapp_White.svg";
</script>

<div class="root">
  <a href="https://api.whatsapp.com/send?phone=79046762007" target={"_blank"}>
    <img src={whatsapp} alt="whatsapp" />
  </a>
  <a href="skype:live:dmitriy_433?chat" target={"_blank"}> <img src={skype} alt="skype" /> </a>
  <a href="https://telegram.me/MityaBorodin" target={"_blank"}>
    <img src={telegram} alt="telegram" />
  </a>
  <a href="https://github.com/mitya-borodin" target="_blank"> <img src={github} alt="github" /> </a>
  <a href={"https://moikrug.ru/mitya-borodin"} target={"_blank"}>
    <img src={moikrug} alt="moikrug" />
  </a>
  <a href="https://www.linkedin.com/in/dmitriy-borodin/" target="_blank">
    <img src={linkedIN} alt="linkedIN" />
  </a>
</div>

<style lang="css">
  @import "./vars/index.css";

  .root {
    width: 330rem;
    display: flex;
    justify-content: space-between;
    margin-top: 140rem;
    margin-left: calc(50% - 330rem / 2);
  }

  .root img {
    width: 30rem;
    height: 30rem;
    cursor: pointer;
  }

  @media (width < 1024px) {
    .root {
      width: 300rem;
      margin-top: 80rem;
      margin-left: calc(50% - 300rem / 2);
    }
  }

  @media (width >= 1024px) and (width < 1440px) {
    .root {
      width: 300rem;
      margin-top: 90rem;
      margin-left: calc(50% - 300rem / 2);
    }
  }
</style>
