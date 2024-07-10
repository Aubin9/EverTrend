import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Categories from "./pages/Categories";
import Carts from "./pages/Carts";
import Notification from "./pages/Notification";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;
