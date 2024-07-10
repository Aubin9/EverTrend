import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { useLocation } from "react-router-dom";
import {} from "react-icons";
import { FaShoppingCart, FaBell } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
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
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          EverTrend
        </NavLink>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Product
          </NavLink>
          <NavLink to="/" onClick={handleClick} activeStyle>
            Shop
          </NavLink>
          <NavLink to="/categories" activeStyle>
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
