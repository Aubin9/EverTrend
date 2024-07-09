import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import {} from "react-icons";
import { FaShoppingCart, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          EverTrend
        </NavLink>
        <NavMenu>
          <NavLink to="/product" activeStyle>
            Product
          </NavLink>
          <NavLink to="/shop" activeStyle>
            Shop
          </NavLink>
          <NavLink to="/categories" activeStyle>
            Categories
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact us
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
