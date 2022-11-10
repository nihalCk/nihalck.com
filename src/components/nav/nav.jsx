import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const navbaritems = [
  {
    id: 1,
    link: "/",
    icon: AiOutlineHome
  },

  {
    id: 2,
    link: "/about",
    icon: AiOutlineUser
  },
  {
    id: 3,
    link: "/experience",
    icon: BiBook
  },
  {
    id: 4,
    link: "/portfolio",
    icon:  RiServiceLine

  },
  {
    id: 5,
    link: "/contact",
    icon: BiMessageSquareDetail
  },
];
const Nav = () => {

  return (
    <nav>
      {navbaritems.map((navitem) => (
        <NavLink
          to={navitem.link}
          className={(navData) => (navData.isActive ? `active ` : "")}
        >
          {navitem.icon}
        </NavLink>
      ))}

      {/* <NavLink
        to="/about"
        className={(navData) => (navData.isActive ? `active ` : '')}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        to="/experience"
        className={(navData) => (navData.isActive ? `active ` : '')}
      >
        <BiBook />
      </NavLink>
      <Link
        to="/portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="/contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link> */}
    </nav>
  );
};

export default Nav;
