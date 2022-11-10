import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Experience from "./routes/Experience";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
// import PortraitesPageTwo from "./routes/PortraitesPageTwo";
// import Filims from "./routes/Filims";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/*<Route path="/portraitesPageTwo" element={<PortraitesPageTwo />} />
        <Route path="/filims" element={<Filims />} /> */}
      </Routes>
    </>
  );
}

export default App;