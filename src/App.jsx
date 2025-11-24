import React, { useState, useEffect, Suspense } from "react";
import Preloader from "./components/PreLoader/Pre";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";
import "./styles/variables.css";
import "./components/Navbar/Navbar.css";

const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Resume = React.lazy(() => import("./pages/Resume/Resume"));

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    // Remove artificial delay, just wait for window load or small timeout to ensure smooth transition
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 100); // Reduced to 100ms just for smooth fade out if needed, or could be removed entirely

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div className="loading-fallback"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;