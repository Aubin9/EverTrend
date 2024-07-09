import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Carts from "./pages/Carts";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import Notification from "./pages/Notification";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;
