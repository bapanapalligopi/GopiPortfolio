// App.js
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectById from "./components/ProjectById";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectById />} />
      </Routes>
    </div>
  );
}
