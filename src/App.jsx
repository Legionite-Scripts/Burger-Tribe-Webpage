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
      <Home />
      <Features />
      <Pages />
      <Portfolio />
      <Contact />
      <Map />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Homepage />}></Route> */}
        {/* <Route path="about" element={<About />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="testimonial" element={<Testimonial />}></Route> */}
      </Routes>
    </>
  );
}
export default App;
