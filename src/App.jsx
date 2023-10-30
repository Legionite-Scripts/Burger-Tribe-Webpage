import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigationbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Features } from "./Components/Features";
import { Pages } from "./Components/Pages";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Map } from "./Components/Map";
import { Footer } from "./Components/Footer";
import "./assets/navbar.css";
import "./assets/home.css";
import "./assets/features.css";
import "./assets/pages.css";
import "./assets/portfolio.css";
import "./assets/contact.css";
import "./assets/footer.css";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function DefaultPage() {
  return (
    <>
      <Home />
      <Features />
      <Pages />
      <Portfolio />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}



export default App;
