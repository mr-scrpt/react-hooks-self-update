import React from "react";
import { NavLink } from "react-router-dom";

export const MenuAdaptive = ({ list }) => {
  const list = [
    { name: "Домой", to: "/", icon: "home" },
    { name: "Создать фид", to: "/articles/new", icon: "home" }
  ];
  return (
    <nav>
      {list.map(item => {
        return <NavLink to={item.to}>{item.name}</NavLink>;
      })}
    </nav>
  );
};
