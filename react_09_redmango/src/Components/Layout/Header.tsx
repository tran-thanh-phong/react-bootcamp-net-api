import React from "react";
import mango from "../../assets/images/mango.png";
import { NavLink, Link } from "react-router-dom";
import { RootState } from "../../Storage/Redux/store";
import { useSelector } from "react-redux";
import { cartItemModel, userModel } from "../../Interfaces";
import { setLoggedInUser, emptyUserState } from "../../Storage/Redux/userAuthSlice";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemsFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  const loginUser: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser(emptyUserState));
    navigate('/');
  }

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
              <NavLink
                className={"nav-link d-flex"}
                aria-current="page"
                to="/shoppingCart"
              >
                <i className="bi bi-cart"></i> ({loginUser.id && cartItemsFromStore.length})
              </NavLink>
            </li>
            <div className="d-flex ms-auto">
              {loginUser.id && (
                <>
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: 0
                      }}
                    >
                      Welcome, {loginUser.fullName}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "btn btn-success btn-outlined rounded-pill text-white mx-2"
                      }
                      style={{ height: "40px", width: "100px", border: "none" }}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

              {!loginUser.id && (
                <>
                  <li className="nav-item">
                    <NavLink className={"nav-link"} to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item text-white">
                    <NavLink
                      className={
                        "btn btn-success btn-outlined rounded-pill text-white mx-2"
                      }
                      style={{ height: "40px", width: "100px", border: "none" }}
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
