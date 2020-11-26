import React, { useState } from "react";
import "./Header.css";
import ShopIcon from "@material-ui/icons/Shop";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [{ cart, user }] = useStateValue();

  const toggleMenu = () => {
    return setMenuToggle(!menuToggle);
  };

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div
        className={`sideDrawer ${
          menuToggle ? "sideDrawer__open" : "sideDrawer__close"
        }`}
      >
        <CloseIcon onClick={toggleMenu} className="sideDrawer__icon-close" />
        <div className="sideDrawer__links">
          <p className="sideDrawer__link">
            <Link to="/">Home</Link>
          </p>
          <p className="sideDrawer__link">
            <Link to="/books">Books</Link>
          </p>
          <p className="sideDrawer__link">
            <Link>Magazines</Link>
          </p>
          <p className="sideDrawer__link">
            <Link>Textbooks</Link>
          </p>
          <p className="sideDrawer__link">
            <Link>Blog</Link>
          </p>
        </div>
        <div className="sideDrawer__actions">
          <p className="sideDrawer__actions-signin">
            <Link to={!user && "./account"} onClick={login}>
              {user ? "Sign Out" : "Sign In"}
            </Link>
          </p>
          <Link
            to="/checkout"
            style={{ display: "flex", position: "relative" }}
          >
            <ShopIcon className="sideDrawer__actions-cart" />
            <p className="header__actions-count">{cart?.length}</p>
          </Link>
        </div>
      </div>

      <div className="header">
        <div className="header__brand">
          <Link to="/">
            Book<span>Store</span>
          </Link>
        </div>
        <div className="header__links">
          <p className="header__link active">
            <Link to="/">Home</Link>
          </p>
          <p className="header__link">
            <Link to="/books">Books</Link>
          </p>
          <p className="header__link">
            <Link>Magazines</Link>
          </p>
          <p className="header__link">
            <Link>Textbooks</Link>
          </p>
          <p className="header__link">
            <Link>Blog</Link>
          </p>
        </div>
        <div className="header__actions">
          <p className="header__actions-signin">
            <Link to="./account">Sign In</Link>
          </p>
          <Link
            to="./checkout"
            style={{ display: "flex", position: "relative" }}
          >
            <ShopIcon className="header__actions-cart" />
            <p className="header__actions-count">{cart?.length}</p>
          </Link>
        </div>
        <MenuIcon onClick={toggleMenu} className="header__menu-icon" />
      </div>
    </>
  );
}

export default Header;
