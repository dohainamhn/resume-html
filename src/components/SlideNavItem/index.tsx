import React, { ReactNode } from "react";
import './style.scss'
interface Props {
  icon: ReactNode;
  text: String;
}

export const SlideNavItem = (props: Props) => {
  const { icon, text } = props;
  return (
    <li className="slide-nav-item">
      <a href="#" className="slide-nav-item__link">
        {icon}
        <div className="slide-nav-text">{text}</div>
      </a>
    </li>
  );
};
