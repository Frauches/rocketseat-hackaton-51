import React from "react";
import { HeaderStyle } from "../styles";

const Header = () => {
  const menuItems = [
    { item: "Home", route: "/" },
    { item: "Sobre", route: "/sobre" },
    { item: "Carreira", route: "/carreira" }
  ];

  return (
    <HeaderStyle>
      <div>
        <span>DevInSchool</span>
      </div>
      <nav>
        <ul>
          {menuItems.map(menuItem => {
            return <li>{menuItem.item}</li>;
          })}
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
