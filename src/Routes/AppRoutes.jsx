import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/work" element={<Work />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;