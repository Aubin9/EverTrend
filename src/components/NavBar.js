import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            EverTrend
          </NavLink>
          <NavLink to="/product" activeStyle>
            Product
          </NavLink>
          <NavLink to="/shop" activeStyle>
            Shop
          </NavLink>
          <NavLink to="/categories" activeStyle>
            Categories
          </NavLink>
          <NavLink to="/cart" activeStyle>
            Carts
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact us
          </NavLink>
          <NavLink to="/notification" activeStyle>
            Notification
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
