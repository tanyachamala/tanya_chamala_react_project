import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import About from "../components/About";

export default function ROUTES() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/edu" element={<Education />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/skills" element={<Skills />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
