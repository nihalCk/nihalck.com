import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/manohar19" target="#">
        <BsLinkedin />
      </a>
      <a href="https://github.com/manohar-19" target="#">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="#">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
