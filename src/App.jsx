import "./App.css";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/layoutComponents/Navbar";
import Footer from "./components/layoutComponents/Footer";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";
import Contact from "./components/pages/Contact/Contact";
import Galleries from "./components/pages/Gallery/Galleries";

import CakeGallery from "./components/pages/Gallery/NavSetions/CakeGallery/CakeGallery";
import { FiArrowUp } from "react-icons/fi";
import PageNotFound from "./components/layoutComponents/PageNotFound/PageNotFound";

function App() {
  //For making a scroll to top button
  const [showScroll, setShowScroll] = useState();
  //useEffect function for showing the button when moved down
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //scroll to top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Galleries />}>
            <Route index element={<Navigate to="/cakes" />} />
          </Route>
          <Route path="/contact" element={<Contact />} />

          {/*Gallary nav links */}
          <Route path="/cakes" element={<CakeGallery />} />

          {/*For the No Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        {showScroll && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "1000",
              cursor: "pointer",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
              boxShadow: "0 4px 6px rgbargba(0,0,0,0.1)",
              backdropFilter: "blur(5px)",
              transition: "background 0.3s ease",
            }}
            onClick={scrollToTop}
          >
            <FiArrowUp size={24} />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
