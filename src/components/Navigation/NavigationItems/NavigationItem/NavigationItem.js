import React from "react";

import "./NavigationItem.css";

const NavigationItem = ({ children, link, active }) => (
  <li className="NavigationItem">
    <a className={active ? "active" : null} href={link}>
      {children}
    </a>
  </li>
);

export default NavigationItem;
