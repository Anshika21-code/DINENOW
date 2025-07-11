import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUser, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Add this for cart state
  const { isSignedIn } = useUser();
  const location = useLocation();
  const logo = "./logoo.svg";

  // Function to get total cart amount
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const renderLink = (element) => {
    // If the link starts with "/", it's a route
    if (element.link.startsWith("/")) {
      return (
        <RouterLink
          to={element.link}
          key={element.id}
          onClick={() => setShow(false)}
        >
          {element.title}
        </RouterLink>
      );
    }
    
    // If we're on the home page, use scroll links
    if (location.pathname === "/") {
      return (
        <ScrollLink
          to={element.link}
          spy={true}
          smooth={true}
          duration={500}
          key={element.id}
          onClick={() => setShow(false)}
        >
          {element.title}
        </ScrollLink>
      );
    }
    
    // If we're not on home page, navigate to home first then scroll
    return (
      <RouterLink
        to={`/#${element.link}`}
        key={element.id}
        onClick={() => setShow(false)}
      >
        {element.title}
      </RouterLink>
    );
  };

  return (
    <nav>
      <div className="logo">
        <RouterLink to="/">
          <img src={logo} alt="Logo" style={{ width: '90px', height: '90px' }} />
        </RouterLink>
      </div>
<div className={show ? "navLinks showmenu" : "navLinks"}>
  <div className="links">
    {data[0].navbarLinks.map((element) => renderLink(element))}
  </div>

  {/* Wrap cart and auth buttons together with very small gap */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    {/* Cart Icon */}
    <div className="navbar-cart-icon">
      <RouterLink to='/cart'>
        <img src={data[0].assets.cart_icon} alt="Cart" />
      </RouterLink>
      <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
    </div>

    {/* Auth buttons */}
    {isSignedIn ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <UserButton />
        <SignOutButton>
          <button className="authBtn">Sign out</button>
        </SignOutButton>
      </div>
    ) : (
      <SignInButton mode="modal">
        <button className="authBtn">Sign-Up</button>
      </SignInButton>
    )}
  </div>
</div>

<div className="hamburger" onClick={() => setShow(!show)}>
  <GiHamburgerMenu />
</div>

      <style jsx>{`
        .navbar-cart-icon {
          position: relative;
          margin-right: 0;
          cursor: pointer;
        }

        .navbar-cart-icon img {
          width: 24px;
          height: 24px;
          color: #C75B7A;
        }

        .dot {
          position: absolute;
          min-width: 10px;
          min-height: 10px;
          background-color: #C75B7A;
          border-radius: 50%;
          top: -8px;
          right: -8px;
        }

        .dot::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #C75B7A;
          border-radius: 50%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;