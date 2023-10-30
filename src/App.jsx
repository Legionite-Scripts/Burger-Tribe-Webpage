import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Features } from "./Components/Features";
import { Pages } from "./Components/Pages";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Map } from "./Components/Map";
import { Footer } from "./Components/Footer";
import("./assets/navbar.css");
import("./assets/home.css");
import("./assets/features.css");
import("./assets/pages.css");
import("./assets/portfolio.css");
import("./assets/contact.css");
import("./assets/footer.css");

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="features" element={<Features />}></Route>
        <Route path="pages" element={<Pages />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
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
