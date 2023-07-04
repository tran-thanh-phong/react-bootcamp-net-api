import React from "react";
import mango from "../../assets/images/mango.png";
import { NavLink, Link } from "react-router-dom";
import { RootState } from '../../Storage/Redux/store';
import { useSelector } from 'react-redux';
import { cartItemModel } from '../../Interfaces';

function Header() {
  const cartItemsFromStore: cartItemModel[] = useSelector((state: RootState) => state.shoppingCartStore.cartItems ?? []);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={mango} style={{ height: "40px" }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={"nav-link"} aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin Panel
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Menu Item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My Orders
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    All Orders
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} aria-current="page" to="/shoppingCart">
                <i className="bi bi-cart"></i> ({cartItemsFromStore.length})
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
