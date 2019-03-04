import withStyles from "isomorphic-style-loader/withStyles";
import React, { PureComponent } from "react";
import s from "./Icons.css";
import github from "./static/Github_White.svg";
import gitlab from "./static/gitlab_White.svg";
import linkedIN from "./static/LinkedIN_White.svg";
import moikrug from "./static/moikrug_White.svg";
import skype from "./static/Skype_White.svg";
import telegram from "./static/Telegram_White.svg";
import upwork from "./static/upwork_White.svg";
import whatsapp from "./static/whatsapp_White.svg";

@withStyles(s)
export class Icons extends PureComponent {
  public render() {
    return (
      <div className={s.root}>
        <a href="https://api.whatsapp.com/send?phone=79046762007" target={"_blank"}>
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a href="skype:live:dmitriy_433?chat" target={"_blank"}>
          <img src={skype} alt="skype" />
        </a>
        <a href="https://telegram.me/MityaBorodin" target={"_blank"}>
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://gitlab.com/mitya-borodin" target="_blank">
          <img src={gitlab} alt="gitlab" />
        </a>
        <a href="https://github.com/mitya-borodin" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href={"https://moikrug.ru/mitya-borodin"} target={"_blank"}>
          <img src={moikrug} alt="moikrug" />
        </a>
        <a href="https://www.linkedin.com/in/dmitriy-borodin/" target="_blank">
          <img src={linkedIN} alt="linkedIN" />
        </a>
        <a href="https://www.upwork.com/o/profiles/users/_~01b144439761919a1a/" target="_blank">
          <img src={upwork} alt="upwork" />
        </a>
      </div>
    );
  }
}
