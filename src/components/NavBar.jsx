import React from "react";
import { Outlet } from "react-router";
import { useSearchContext } from "../context";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  let { search, setSearch, cart, setCategory } = useSearchContext();
  const navigate = useNavigate();
  const cartItemCount = cart.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search?q=${search}`);
  };
  return (
    <div>
      <nav className="navbar bg-body-tertiary" style={{ padding: "0px" }}>
        <div
          className="container-fluid "
          style={{ background: "#344e41", padding: "10px" }}
        >
          <a
            className="navbar-brand"
            style={{ color: "#dad7cd", fontWeight: "700", padding: "0px 10px" }}
          >
            Shopping
          </a>
          <ul className="nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                style={{ color: "#dad7cd" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link"
                to="/products"
                style={{ color: "#dad7cd" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link"
                to="/about"
                style={{ color: "#dad7cd" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link "
                aria-disabled="true"
                to="/categories"
                style={{ color: "#dad7cd" }}
              >
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link link"
                aria-disabled="true"
                to="/cart"
                style={{ color: "#dad7cd" }}
              >
                Cart
                {cartItemCount > 0 && (
                  <span
                    className="badge badge-pill badge-primary ml-1"
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      position: "absolute",
                      background: "white",
                      padding: "2px",
                      borderRadius: "100%",
                      top: "10",
                      width: "25px",
                      height: "25px",
                      textAlign: "center",
                      margin: "0px 5px",
                    }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
