// !!!!!!!!!!!!!!!!!!!!!!!!!!!! header component !!!!!!!!!!!!!!!!!!!!!!

// ======================= importing elements ========================

// ----------------- to use react -------------------
import React, { useEffect } from "react";

// ---------------- TO USE ROUTER LINK -------------
import { Link } from "react-router-dom";

// ------------------- TO USE HEADER SIDE COMPONENT------------
import Headerside from "./headerside";

// -------------------- to share data ------------------
import { Usedata } from "../component/ContextAPI";

// ------------------------ to take a refrence -----------
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// ======================= main function =====================

const Header = () => {
  const { User } = Usedata();
  const makenone = useRef(null);
  const makeblock = useRef(null);
  const navigate = useNavigate();
  const { CartProducts } = Usedata();

  useEffect(() => {
    if (User.loginstat === true) {
      makenone.current.style.setProperty("display", "none", "important");
    } else {
      makenone.current.style.setProperty("display", "inline", "important");
    }
  }, []);

  useEffect(() => {
    if (User.loginstat === false) {
      makeblock.current.style.setProperty("display", "none", "important");
    } else {
      makeblock.current.style.setProperty("display", "inline", "important");
    }
  }, []);

  return (
    <div className="header position-fixed">
      <div className="header_contianer ">
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
          <div className="container-lg container-fluid ">
            <div
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <span className="navbar-toggler-icon"></span>
            </div>

            <Link to="/">
              <div className="header_logo ">
                <img
                  src="https://html.hixstudio.net/orfarm/assets/img/logo/logo.png"
                  alt=""
                />
              </div>
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav.item ms-3 ">
                  <Link
                    to="/"
                    className="nav-link  active text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav.item ms-3">
                  <Link
                    to="/shop"
                    className="nav-link  active text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    shope
                  </Link>
                </li>
                <li className="nav.item ms-3 ">
                  <Link
                    to="/blog"
                    className="nav-link  active text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    blog
                  </Link>
                </li>

                <li className="nav.item ms-3 h-100 dropdown position-relative active text-capitalize">
                  <a
                    className="nav-link   active text-capitalize"
                    role="button"
                  >
                    pages <i className="fas fa-chevron-down ms-1 "></i>
                  </a>
                  <ul className="position-absolute mt-3 text-capitalize pt-1 pb-3">
                    <li>
                      <Link
                        to="/storlocation"
                        className="dropdown-item"
                        href="#"
                      >
                        Store location{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkout" className="dropdown-item" href="#">
                        Check out{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="dropdown-item" href="#">
                        Cart Page{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item" href="#">
                        Sign in{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/favourat" className="dropdown-item" href="#">
                        Wish list{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="*" className="dropdown-item" href="#">
                        Error 404{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav.item ms-3 ">
                  <Link
                    to="/about"
                    className="nav-link  active text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    about us
                  </Link>
                </li>
                <li className="nav.item ms-3 ">
                  <Link
                    to="/contact"
                    className="nav-link  active text-capitalize"
                    aria-current="page"
                    href="#"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header_buttoms ">
              <button
                className="ms-3 border-0 btn d-none d-sm-inline"
                style={{ background: "#FFF3EC", borderRadius: "50%" }}
                onClick={() => navigate("/favourat")}
              >
                <i className="fa-regular fa-heart"></i>
              </button>

              {/* زر الانتقال إلى صفحة التسجيل */}
              <button
                ref={makenone}
                className="ms-3 border-0 btn d-none d-sm-inline"
                style={{ background: "#ECFBFF", borderRadius: "50%" }}
                onClick={() => navigate("/register")}
              >
                <i className="fa-regular fa-user"></i>
              </button>

              {/* زر الانتقال إلى الحساب */}
              <button
                ref={makeblock}
                className="ms-3 border-0 btn d-none d-sm-inline"
                style={{ background: "#ECFBFF", borderRadius: "50%" }}
                onClick={() => navigate("/account")}
              >
                <i className="fa-regular fa-user"></i>
              </button>

              {/* زر الانتقال إلى السلة */}
              <button
                className="border-0 ms-3 btn position-relative"
                style={{ background: "#FEEFD0", borderRadius: "50%" }}
                onClick={() => navigate("/cart")}
              >
                <img
                  src="https://html.hixstudio.net/orfarm/assets/img/icon/cart-1.svg"
                  alt=""
                />
                <div className="rounded-5 numofproduct position-absolute bg-danger text-white">
                  {CartProducts.length}
                </div>
              </button>
            </div>
          </div>
          <div className="d-lg-none">
            <Headerside />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
