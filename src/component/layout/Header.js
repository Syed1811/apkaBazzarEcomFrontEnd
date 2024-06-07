import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./apkaBazzar.png";
// import { FaRegMoon } from "react-icons/fa";
// import { IoSunnyOutline } from "react-icons/io5";
import { useAuth } from "../../context/auth.js";
import { toast, Zoom } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { FaSignInAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
// import { BiSolidOffer } from "react-icons/bi";
import { MdDashboard, MdLanguage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Modal } from "antd";
import SearchProduct from "./../../pages/SearchProduct.js";
import { useCart } from "../../context/cart.js";
import { useFav } from "../../context/fav.js";

function Header(props) {
  const [auth, setauth] = useAuth();
  const [cart] = useCart();
  const [fav] = useFav();
  const [isMenuActive, setMenuActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [ip, setIp] = useState();
  const [cityip, setcityip] = useState();
  const [country, setcountry] = useState();
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const getIp = async () => {
    // Connect ipapi.co with fetch()
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    // Set the IP address to the constant `ip`
    setIp(data.ip);
    setcityip(data.city);
    setcountry(data.country_name);
  };

  // Run `getIP` function above just once when the page is rendered
  useEffect(() => {
    getIp();
  }, []);

  const name = auth.user
    ? `${auth.user.first_name} ${auth.user.last_name}`
    : "";

  const menuToggle = () => {
    setMenuActive(!isMenuActive);
  };

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      tocken: "",
    });

    localStorage.removeItem("auth");
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  return (
    <>
      <div className="navbar ps-1 pe-1">
        <NavLink
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <IoIosMenu className="openNav" />
        </NavLink>

        <div
          className="offcanvas offcanvas-start custom-offcanvas"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div
            className="offcanvas-header"
            style={{
              backgroundColor: "#204969",
            }}
          >
            <i
              className="fas fa-angle-left closeNav"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>

            <h5
              className="offcanvas-title ms-auto"
              id="offcanvasScrollingLabel"
            >
              {" "}
              <div className="logoC">
                <NavLink
                  className="navbar-brand brand"
                  to="/"
                  style={{
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  <img src={logo} alt="logo" style={{ width: "25px" }} />{" "}
                  apkaBazzar
                </NavLink>
              </div>
            </h5>
            {/* <button
              className="switch"
              id="switch"
              onClick={props.toggleMode}
              style={{
                backgroundColor: props.mode === "light" ? "#D3D3D3" : "#0B1423",
              }}
            >
              {props.mode === "light" ? (
                <IoSunnyOutline
                  className={`switch-light`}
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#D14009",
                  }}
                />
              ) : (
                <FaRegMoon
                  className={`switch-dark`}
                  style={{
                    color: "#dcdcdc",
                    width: "20px",
                    height: "20px",
                  }}
                />
              )}
            </button> */}
          </div>
          <div
            className="offcanvas-body"
            style={{
              backgroundColor: "#d5e3ed",
              padding: "0px",
              color: "black",
            }}
          >
            <ul className="headingSideBar" data-bs-dismiss="offcanvas">
              <NavLink
                to="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "flex",
                }}
              >
                <li className="me-auto">ApkaBazzar Home</li>
                <li>
                  <IoHomeOutline />
                </li>
              </NavLink>
            </ul>
            <ul className="NavLinks">
              <li className="headingNavLinks">Top Categories for You</li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/fashion">
                  Fashion
                </NavLink>
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/electronicItems">
                  Eletronics
                </NavLink>
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/beauty">
                  Beauty
                </NavLink>
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/homeandkitchen">
                  Home and Kitchen
                </NavLink>
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/categories">
                  Sell All Categories
                </NavLink>
              </li>
            </ul>
            <ul className="NavLinks">
              <li className="headingNavLinks" data-bs-dismiss="offcanvas">
                Offers & History
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                Money Spent
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                Offer Store
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                Coupon Store
              </li>
            </ul>
            <ul className="NavLinks">
              <li className="headingNavLinks" data-bs-dismiss="offcanvas">
                Help & Support
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                {" "}
                <NavLink className="text-dark" to="/policy">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/refundpolicy">
                  Refund Policy
                </NavLink>
              </li>
              <li className="listNavLinks" data-bs-dismiss="offcanvas">
                <NavLink className="text-dark" to="/cautionNotice">
                  Caution Notice
                </NavLink>
              </li>
            </ul>
            <div className="sideNavFooter ps-4 pb-3">
              © 2024 Copyright: apkaBazzar
            </div>
          </div>
        </div>
        <div className="logoC">
          <NavLink
            className="navbar-brand brand"
            to="/"
            style={{
              color: "white",
            }}
          >
            <img src={logo} alt="logo" style={{ width: "40px" }} /> apkaBazzar
          </NavLink>
        </div>
        <div className="d-flex hoverbg">
          <FaLocationDot
            style={{
              marginTop: "15px",
              fontSize: "18px",
              marginRight: "5px",
            }}
          />
          <div>
            <div
              style={{
                color: "#B5C0D0",
                fontSize: "12px",
              }}
            >
              {auth ? `Deliver to ${name}` : ""}
            </div>
            <div
              style={{
                color: "white",
                fontSize: "14px",
                fontWeight: "bolder",
              }}
            >
              {ip ? (
                <>
                  {cityip}, {country}
                  {auth.user !== null
                    ? auth.user.pincode === ""
                      ? null
                      : `, ${auth.user.pincode}`
                    : null}
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-md-4 searchBox d-none d-md-block">
          <form
            className="d-flex input-group border"
            style={{
              color: props.mode === "dark" ? "white" : "#204969",
              backgroundColor: props.mode === "light" ? "#d5e3ed" : "#0B1423",
            }}
          >
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              style={{
                color: props.mode === "dark" ? "white" : "#204969",
                backgroundColor: props.mode === "light" ? "#d5e3ed" : "#0B1423",
                border: "none",
              }}
            />
            <span
              className="input-group-text border-0 d-lg-flex"
              style={{
                backgroundColor: "#0cc0df",
                border: "1px solid white",
                borderRadius: "0px",
              }}
              onClick={() => {
                setVisible(true);
              }}
            >
              <i className="fas fa-search text-light" />
            </span>
          </form>
        </div>
        <div className="dropdown ms-3 d-none d-lg-flex">
          <NavLink
            className="dropbtn"
            style={{
              color: "white",
            }}
          >
            <MdLanguage /> Language <IoMdArrowDropdown />
          </NavLink>
          <div className="dropdown-content mt-5">
            <NavLink to="#!">Link 1</NavLink>
            <NavLink to="#!">Link 2</NavLink>
            <NavLink to="#!">Link 3</NavLink>
          </div>
        </div>
        <div className="justify-content-center profile">
          {auth.user ? (
            <>
              <div className="action">
                <div
                  className="profile"
                  onClick={menuToggle}
                  onMouseEnter={menuToggle}
                >
                  <img
                    src={`https://avatar.iran.liara.run/username?username=${auth.user?.first_name}+${auth.user?.last_name}&background=random`}
                    alt="Profile Avatar"
                  />{" "}
                </div>
                <div
                  className={`menu ${isMenuActive ? "active" : ""}`}
                  onMouseLeave={menuToggle}
                  style={{
                    color: props.mode === "dark" ? "white" : "#204969",
                    backgroundColor:
                      props.mode === "light" ? "#d5e3ed" : "#0B1423",
                    borderColor: props.mode === "light" ? "#0B1423" : "white",
                  }}
                >
                  <h3
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                    }}
                  >
                    {name}
                    <br />
                    <div
                      className="logout"
                      style={{
                        border: "1px solid",
                        borderColor: isHovered
                          ? props.mode === "light"
                            ? "white"
                            : "#0B1423"
                          : props.mode === "light"
                          ? "#0B1423"
                          : "white",
                        transition: "border-color 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <NavLink
                        to="/login"
                        onClick={handleLogout}
                        style={{
                          textDecoration: "none",
                          color: props.mode === "dark" ? "white" : "#000000",
                          paddingTop: "10px",
                        }}
                      >
                        <CiLogout /> Logout
                      </NavLink>
                    </div>
                  </h3>
                  <ul>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                        }}
                      >
                        <CgProfile
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        />{" "}
                        My profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/updateprofile"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                        }}
                      >
                        <FiEdit
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        />
                        Edit profile
                      </NavLink>
                    </li>
                    {auth?.user?.role === 1 ? (
                      <li>
                        <NavLink
                          to="/dashboard/users"
                          style={{
                            color: props.mode === "dark" ? "white" : "#204969",
                          }}
                        >
                          <MdDashboard
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                          Dashboard
                        </NavLink>
                      </li>
                    ) : (
                      <></>
                    )}
                    <li>
                      <NavLink
                        to="/!#"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                        }}
                      >
                        <IoSettingsOutline
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        />{" "}
                        Setting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/!#"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                        }}
                      >
                        <TfiHelpAlt
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        />{" "}
                        Help
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="action">
                <div
                  className="profile"
                  onClick={menuToggle}
                  onMouseEnter={menuToggle}
                >
                  <img
                    src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
                    alt="Profile Avatar"
                  />{" "}
                </div>
                <div
                  className={`menu ${isMenuActive ? "active" : ""}`}
                  onMouseLeave={menuToggle}
                  style={{
                    color: props.mode === "dark" ? "white" : "#204969",
                    backgroundColor:
                      props.mode === "light" ? "#d5e3ed" : "#0B1423",
                    borderColor: props.mode === "light" ? "#0B1423" : "white",
                  }}
                >
                  <ul>
                    <li>
                      <NavLink
                        to="/login"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                        }}
                      >
                        <CiLogin /> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        style={{
                          color: props.mode === "dark" ? "white" : "#204969",
                        }}
                      >
                        <FaSignInAlt /> SignIn
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="d-flex d-none d-md-flex">
          {/* Cart */}
          <NavLink className="text-reset me-3" to="/cart">
            <span>
              <i
                className="fas fa-shopping-cart"
                style={{
                  fontSize: "24px",
                }}
              />
            </span>
            <span className="badge rounded-pill badge-notification bg-danger">
              {cart?.length}
            </span>
          </NavLink>
          {/* Fav */}
          <NavLink className="text-reset me-3" to="/fav">
            <span>
              <i
                className="fas fa-heart"
                style={{
                  fontSize: "24px",
                }}
              />
            </span>
            <span className="badge rounded-pill badge-notification bg-danger">
              {fav?.length}
            </span>
          </NavLink>
        </div>
      </div>
      <div
        className="navbar d-none d-md-flex ps-3 pe-3"
        style={{ width: "100%", backgroundColor: "rgb(52, 58, 64)" }}
      >
        <div className="col-md-4" style={{ width: "100%" }}>
          <div className="d-flex">
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/electronicItems">
                {" "}
                Electronics
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/fashion">
                {" "}
                Fashion
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/beauty">
                {" "}
                Beauty
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/homeandkitchen">
                {" "}
                Home & Kitchen
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/stationary">
                {" "}
                Stationary
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/furniture">
                {" "}
                Furniture
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/fresh">
                {" "}
                Sports
              </NavLink>
            </div>
            <div className="ms-5 categoryLinks" style={{ fontSize: "12px" }}>
              <NavLink className="text-light" to="/grocery">
                {" "}
                Grocery
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className="navbar d-flex d-md-none ps-3 pe-3"
        style={{ width: "100%" }}
      >
        <div className="col-md-4 searchBox " style={{ width: "100%" }}>
          <form
            className="input-group border-0"
            style={{
              color: props.mode === "dark" ? "white" : "#204969",
              backgroundColor: props.mode === "light" ? "#d5e3ed" : "#0B1423",
              width: "100%",
            }}
          >
            <input
              autoComplete="off"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control rounded"
              placeholder="Search"
              style={{
                color: props.mode === "dark" ? "white" : "#204969",
                backgroundColor: props.mode === "light" ? "#d5e3ed" : "#0B1423",
                border: "none",
                width: "100%",
              }}
            />
            <span
              className="input-group-text border-0 d-lg-flex"
              style={{
                backgroundColor: "#0cc0df",
                borderRadius: "0px",
              }}
              onClick={() => {
                setVisible(true);
              }}
            >
              <i className="fas fa-search text-light" />
            </span>
          </form>
        </div>
      </div>

      <div className="B-navbar d-flex d-md-none">
        <NavLink to="/" className="AppBar">
          <div className="justify-content-center">
            <div className="logo">
              <IoIosHome
                style={{
                  fontSize: "18px",
                }}
              />
            </div>
            <div className="disB">Home</div>
          </div>
        </NavLink>
        <NavLink to="/categories" className="AppBar">
          <div className="justify-content-center">
            <div className="logo">
              <BiCategory
                style={{
                  fontSize: "18px",
                }}
              />
            </div>
            <div className="disB">Categories</div>
          </div>
        </NavLink>
        <NavLink to="/fav" className="AppBar">
          <div className="justify-content-center">
            <div className="logo">
              <CiHeart
                style={{
                  fontSize: "18px",
                }}
              />
            </div>
            <div className="disB">Wish</div>
          </div>
        </NavLink>
        <NavLink to="/cart" className="AppBar">
          <div className="justify-content-center ">
            <div className="logo">
              <FaShoppingCart
                style={{
                  fontSize: "18px",
                }}
              />
            </div>
            <div className="disB">Cart</div>
          </div>
        </NavLink>
      </div>
      <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
        <SearchProduct queryCome={query} />
      </Modal>
    </>
  );
}

export default Header;
