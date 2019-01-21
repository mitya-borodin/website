import withStyles from "isomorphic-style-loader/lib/withStyles";
import React, { PureComponent } from "react";
import s from "./Icons.css";
import gitlab from "./static/gitlab_White.svg";
import whatsapp from "./static/whatsapp_White.svg";

@withStyles(s)
export class Icons extends PureComponent {
  public render() {
    return (
      <div className={s.root}>
        <a href="https://gitlab.com/mitya-borodin" target="_blank">
          <img src={gitlab} alt="gitlab" />
        </a>
        <a href={"https://moikrug.ru/mitya-borodin"} target={"_blank"} />
        <a href="skype:live:dmitriy_433?chat" target={"_blank"} />
        <a href="https://telegram.me/MityaBorodin" target={"_blank"} />
        <a href="https://api.whatsapp.com/send?phone=79046762007" target={"_blank"}>
          <img src={whatsapp} alt="gitlab" />
        </a>
        <a href="https://www.linkedin.com/in/dmitriy-borodin/" target="_blank" />
        <a href="https://www.upwork.com/" target="_blank" />
        <a href="https://github.com/mitya-borodin" target="_blank" />
      </div>
    );
  }
}
