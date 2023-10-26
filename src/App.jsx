import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Features } from "./Components/Features";
import("./assets/navbar.css");
import("./assets/home.css");
import("./assets/features.css");

function App() {
  return (
    <>
      <Navigationbar />
      <Home />
      <Features/>
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
