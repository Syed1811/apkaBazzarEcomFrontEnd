import React, { useState } from "react";
import { BiCategory, BiSearch, BiUser } from "react-icons/bi";
import { IoCloseCircleOutline, IoCreate } from "react-icons/io5";
import { MdDashboard, MdDelete, MdMessage, MdUpdate } from "react-icons/md";
import logo from "../../component/layout/apkaBazzar.png";
import { RiAdminFill } from "react-icons/ri";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import { useFav } from "../context/fav";
import { toast, Zoom } from "react-toastify";

const UpdateCategory = () => {
  const [isOpen, setisOpen] = useState(true);

  const handleShrinkClick = () => {
    document.body.classList.toggle("shrink");
    setisOpen(!isOpen);
  };

  const handleSearchClick = () => {
    document.body.classList.remove("shrink");
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <nav className="sidebarAdmin">
            <div
              style={{
                marginTop: "-30px",
                textAlign: "right",
                fontSize: "20px",
              }}
            >
              {" "}
              {isOpen ? (
                <IoCloseCircleOutline onClick={handleShrinkClick} />
              ) : (
                <TbLayoutSidebarRightCollapseFilled
                  onClick={handleShrinkClick}
                />
              )}{" "}
            </div>
            <div className="sidebar-top">
              <NavLink
                className="navbar-brand brand"
                to="/"
                style={{
                  color: "white",
                  fontSize: "15px",
                }}
              >
                <img src={logo} alt="logo" style={{ width: "25px" }} />{" "}
                <h3 className="hide">apkaBazzar</h3>
              </NavLink>
            </div>
            <div className="search" onClick={handleSearchClick}>
              <BiSearch className="ms-auto me-auto" />
              <input
                type="text"
                className="hide"
                placeholder="Quick Search ..."
              />
            </div>
            <div className="sidebar-links">
              <ul>
                <div className="active-tab" id="activeTab" />
                <li className="tooltip-element">
                  <NavLink to="/dashboard/admin">
                    <div className="iconSideBar">
                      <MdDashboard className="miniIcon" />
                    </div>
                    <span className="link hide">Dashboard</span>
                  </NavLink>
                </li>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/users">
                    <div className="iconSideBar">
                      <BiUser className="miniIcon" />
                    </div>
                    <span className="link hide">Users</span>
                  </NavLink>
                </li>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/admins">
                    <div className="iconSideBar">
                      <RiAdminFill className="miniIcon" />
                    </div>
                    <span className="link hide">Admins</span>
                  </NavLink>
                </li>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/messages">
                    <div className="iconSideBar">
                      <MdMessage className="miniIcon" />
                    </div>
                    <span className="link hide">Messages</span>
                  </NavLink>
                </li>
              </ul>
              <h4 className="headingSidebar">Product</h4>
              <ul>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/createProduct">
                    <div className="iconSideBar">
                      <IoCreate className="miniIcon" />
                    </div>
                    <span className="link hide">Create Product</span>
                  </NavLink>
                </li>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/updateProduct">
                    <div className="iconSideBar">
                      <MdUpdate className="miniIcon" />
                    </div>
                    <span className="link hide">Update Product</span>
                  </NavLink>
                </li>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/deleteProduct">
                    <div className="iconSideBar">
                      <MdDelete className="miniIcon" />
                    </div>
                    <span className="link hide">Delete Product</span>
                  </NavLink>
                </li>
              </ul>
              <h4 className="headingSidebar">Category</h4>
              <ul>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/createCategory">
                    <div className="iconSideBar">
                      <BiCategory className="miniIcon" />
                    </div>
                    <span className="link hide">Create Category</span>
                  </NavLink>
                </li>
                <li className="tooltip-element active">
                  <NavLink to="/dashboard/updateCategory">
                    <div className="iconSideBar">
                      <MdUpdate className="miniIcon" />
                    </div>
                    <span className="link hide">Update Category</span>
                  </NavLink>
                </li>
                <li className="tooltip-element">
                  <NavLink to="/dashboard/deleteCategory">
                    <div className="iconSideBar">
                      <MdDelete className="miniIcon" />
                    </div>
                    <span className="link hide">Delete Category</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col">
          <h1>Update Category</h1>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
