import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="linkedin.com/in/muhammed-nihal-ck-65b0b31b8" target="#">
        <BsLinkedin />
      </a>
      <a href="https://github.com/nihalCk" target="#">
        <FaGithub />
      </a>
      <a href="#" target="#">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
