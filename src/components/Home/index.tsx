import React from "react";
import { SocialIcon } from "../SocialIcon";
import "./style.scss";
interface Props {
  t:any
}
const list_icon = [
  "fab fa-instagram",
  "fab fa-twitter",
  "fab fa-behance",
  "fab fa-dribbble",
  "fab fa-pinterest-p",
];
export const Home = (props: Props) => {
  const {t} = props;
  return (
    <div className="Home">
      <div className="container">
        <div className="intro">
          <img
            src="https://jthemes.net/themes/html/bolby/demo/images/avatar-1.svg"
            alt="Bac"
            className="mb-2"
          />
          <h1 className="mb-2">Bac Do</h1>
          <span>
            {t("recommend")}{" "}
            <span className="text-changing">
              <span className="animation-bouncing">IT</span>
            </span>
          </span>
          <ul className="social-list-icons mt-4">
                {list_icon.map((item, index)=>{
                  return  <SocialIcon iconClass={item} key={index} />
                })}
          </ul>
          <div className="mt-4">
              <a href="#" className="btn btn-default">{t("hide")}</a>
          </div>
        </div>
        <div className="scroll__down mt-3">
            <a href="#about">
                <span className="mb-2">{t("scroll")}</span>
                <span className="mouse mt-1">
                    <span className="wheel" ></span>
                </span>
            </a>
        </div>
      </div>
    </div>
  );
};
