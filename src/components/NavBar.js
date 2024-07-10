import React, { useState } from "react";
import { Nav, NavLink, NavMenu, MobileIcon } from "./NavbarElements";
import { useLocation } from "react-router-dom";
import {} from "react-icons";
import { FaShoppingCart, FaBell, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: document.getElementById("new-arrivals").offsetTop,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/#new-arrivals";
    }
  };
  const handleClick2 = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: document.getElementById("feature-categories").offsetTop,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/#feature-categories";
    }
  };
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          EverTrend
        </NavLink>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink to="/" activeStyle>
            Product
          </NavLink>
          <NavLink to="/shop" onClick={handleClick} activeStyle>
            Shop
          </NavLink>
          <NavLink to="/" onClick={handleClick2} activeStyle>
            Categories
          </NavLink>
          <NavLink to="/cart" activeStyle>
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/notification" activeStyle>
            <FaBell />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
