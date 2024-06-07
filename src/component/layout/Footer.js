import React from "react";
import { FaHome, FaPhoneAlt, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="text-light">
      <footer
        className={`text-${
          props.mode === "dark" ? "light" : "dark"
        } text-center text-lg-start`}
        style={{
          color: props.mode === "dark" ? "white" : "#0B1423",
          backgroundColor: props.mode === "light" ? "white" : "#0B1423",
          borderTop: `1px solid ${
            props.mode === "light" ? "#0B1423" : "white"
          }`,
        }}
      >
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>
              <p>
                Discover seamless grocery shopping at ApnaBazzar – where online
                convenience meets in-store authenticity. We offer a diverse
                range of high-quality products at competitive prices, enhancing
                well-being.
              </p>

              <p>
                Our mission is to redefine grocery shopping with fresh,
                wholesome, and ethically sourced products. Join us in
                transforming your grocery experience – where quality meets
                convenience, and community thrives.{" "}
                <NavLink to="/aboutus">Know More</NavLink>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 ">Contact</h5>
              <ul className="fa-ul" style={{ listStyle: "none" }}>
                <li className="mb-3">
                  <span className="fa-li">
                    <FaHome style={{ color: "#0cc0df" }} />
                  </span>
                  <span className="ms-2">
                    Supertech Supernova, Plot No. 3 Sector 94, Noida, Uttar
                    Pardesh, 201309
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <MdEmail style={{ color: "#0cc0df" }} />
                  </span>
                  <span className="ms-2">raiyanullah0@example.com</span>
                </li>
                <li className="mb-3 ml-2">
                  <span className="fa-li">
                    <FaPhoneAlt style={{ color: "#0cc0df" }} />
                  </span>
                  <span className="ms-2">+91 - 95xxxxxxx8</span>
                </li>
              </ul>
              <h5 className="text-uppercase mb-4">Connect With Us</h5>
              <div className="ms-3">
                <a
                  href="https://www.facebook.com/raiyanullah.raiyanullah/"
                  className="btn text-white btn-lg btn-floating"
                  data-mdb-ripple-init
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                  style={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#3b5998",
                  }}
                >
                  <i className="fab fa-facebook"></i>
                </a>

                <a
                  href="https://twitter.com/Syed18112002"
                  className="btn text-white btn-lg btn-floating ms-2"
                  data-mdb-ripple-init
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                  style={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#55acee",
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn text-white btn-lg btn-floating ms-2"
                  data-mdb-ripple-init
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/syedraiyanullah?utm_source=qr"
                  role="button"
                  style={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#ac2bac",
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="text-right ms-3 mt-1">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2 mt-2"
                >
                  <FaGooglePlay /> GooglePlay
                </button>

                <button type="button" className="btn btn-outline-primary mt-2">
                  <FaAppStore /> AppStore
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">PRODUCT CATEGORIES</h5>
              <ul className="fa-ul" style={{ listStyle: "none" }}>
                <li className="mb-3">
                  <span>
                    <Link
                      to="/electronicItems"
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Electronics
                    </Link>
                  </span>
                </li>
                <li className="mb-3">
                  <span>
                    <Link
                      to="/fashion"
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Fashion
                    </Link>
                  </span>
                </li>
                <li className="mb-3">
                  <span>
                    <Link
                      to="/beauty"
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Beauty
                    </Link>
                  </span>
                </li>
                <li className="mb-3">
                  <span>
                    <Link
                      to="/homeandkitchen"
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Home & Kitchen
                    </Link>
                  </span>
                </li>
                <li className="mb-3">
                  <span>
                    <Link
                      to="/fresh"
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Sports
                    </Link>
                  </span>
                </li>
                <li className="mb-3 ">
                  <span>
                    <Link
                      to="/grocery"
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Grocery
                    </Link>
                  </span>
                </li>
                <li className="mb-3">
                  <span>
                    <Link
                      to=""
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Stationary
                    </Link>
                  </span>
                </li>
                <li className="mb-3">
                  <span>
                    <Link
                      to=""
                      style={{
                        textDecoration: "none",
                        color: props.mode === "dark" ? "white" : "#0B1423",
                      }}
                    >
                      Furniture
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="text-center baseFoot"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="compybase">
          © 2024 Copyright:{" "}
          <NavLink to="/" style={{ textDecoration: "none" }}>
            apkaBazzar
          </NavLink>
        </div>
        <div className="linkbase">
          <Link
            to="/policy"
            style={{ textDecoration: "none", marginRight: "5px" }}
          >
            Privacy Policy
          </Link>
          |
          <Link
            to="/refundpolicy"
            style={{
              textDecoration: "none",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            Refund Policy
          </Link>
          |
          <Link
            to="/cautionNotice"
            style={{ textDecoration: "none", marginLeft: "5px" }}
          >
            Caution Notice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
