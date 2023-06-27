import logo from "../../images/react.png";
import { Link, NavLink } from "react-router-dom";
import NavLinkCustom from "./NavLinkCustom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              style={{ height: "35px", verticalAlign: "top" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLinkCustom route={"/"} text={"Home"} />
              </li>
              <li className="nav-item">
                <NavLinkCustom route={"/about"} text={"About"} />
              </li>
              <li className="nav-item">
                <NavLinkCustom
                  route={"/cryptoDetail/BTC/10"}
                  text={"Crypto Detail"}
                />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/product">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/list">
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/create">
                      Product Create
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/details/3">
                      Product Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
