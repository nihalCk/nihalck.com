import React from "react";
import CV from "../../assets/cv.pdf";

import { Link } from "react-router-dom";


const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="/Contact">
      <a  className="btn btn-primary">
        Let's Talk
      </a>
      </Link>
    </div>
  );
};

export default CTA;
