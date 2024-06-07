import React, { useState } from "react";
import { toast, Zoom } from "react-toastify";
import axios from "axios";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.js";

const PasswordChange = (props) => {
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [auth, setAuth] = useAuth(); // Fix the typo in the state updater function
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== cpass) {
      toast.warning("Passwords do not match", {
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
      return;
    }

    try {
      const res = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/passUpdate",
        {
          email: auth?.user?.email,
          password: pass,
        }
      );

      if (res.data.success) {
        handleLogout();
        toast.success(res.data.message + ", Please Re-Login", {
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
      } else {
        toast.warning(res.data.message, {
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
      }
    } catch (error) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      toast.error("Something went wrong", {
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
    }
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "", // Fix the typo in the state structure
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <div className="content">
        <div className="main-body">
          {/* Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div
                className="card"
                style={{
                  color: props.mode === "dark" ? "white" : "#000000",
                  border: "1px solid black",
                }}
              >
                <div className="card-body card-bodyProfile">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={`https://avatar.iran.liara.run/username?username=${auth.user?.first_name}+${auth.user?.last_name}&background=random`}
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>
                        {auth?.user?.first_name === "" ||
                        auth?.user?.last_name === ""
                          ? "Not Provided"
                          : auth?.user?.first_name +
                            " " +
                            auth?.user?.last_name}
                      </h4>
                      <p className="font-size-sm">
                        {auth?.user?.address === ""
                          ? "Not Provided"
                          : auth?.user?.address}
                      </p>
                      <button
                        className="btn btn-outline-warning m-1"
                        style={{
                          color: "#dc3545",
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                      <button className="btn btn-danger text-dark m-1">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div
                  className="sidebar"
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <NavLink to="/dashboard/profile">My Account</NavLink>
                  <NavLink to="/dashboard/updatepassword">
                    Change Password
                  </NavLink>
                  <NavLink to="/dashboard/yourorder">My Orders</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="container">
                <div className="row py-5 mt-4 align-items-center">
                  {/* Registeration Form */}
                  <div className="col-md-7 col-lg-6 ml-auto">
                    <h1
                      style={{
                        color: props.mode === "dark" ? "white" : "#204969",
                      }}
                    >
                      Update Password
                    </h1>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="input-group col-lg-6 mb-4">
                          <div className="input-group-prepend inputSpan">
                            <span
                              className="input-group-text  px-4 border-md icon inputSpan"
                              style={{
                                color:
                                  props.mode === "dark" ? "white" : "#000000",
                                backgroundColor:
                                  props.mode === "light" ? "white" : "#0B1423",
                                borderColor:
                                  props.mode === "light" ? "#0B1423" : "white",
                                borderRadius: "8px 0px 0px 8px",
                              }}
                            >
                              <RiLockPasswordFill />
                            </span>
                          </div>
                          <input
                            id="pass"
                            type="password"
                            name="pass"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="New Password"
                            className="form-control  border-md rgisterInput"
                            style={{
                              color:
                                props.mode === "dark" ? "white" : "#000000",
                              backgroundColor:
                                props.mode === "light" ? "white" : "#0B1423",
                              borderColor:
                                props.mode === "light" ? "#0B1423" : "white",
                            }}
                          />
                        </div>
                        {/* Password */}
                        <div className="input-group col-lg-6 mb-2">
                          <div className="input-group-prepend inputSpan">
                            <span
                              className="input-group-text  px-4 border-md icon inputSpan"
                              style={{
                                color:
                                  props.mode === "dark" ? "white" : "#000000",
                                backgroundColor:
                                  props.mode === "light" ? "white" : "#0B1423",
                                borderColor:
                                  props.mode === "light" ? "#0B1423" : "white",
                                borderRadius: "8px 0px 0px 8px",
                              }}
                            >
                              <RiLockPasswordFill />
                            </span>
                          </div>
                          <input
                            id="cpass"
                            type="password"
                            name="cpass"
                            placeholder="Confirm Password"
                            value={cpass}
                            onChange={(e) => setCPass(e.target.value)}
                            className="form-control  border-md rgisterInput"
                            style={{
                              color:
                                props.mode === "dark" ? "white" : "#000000",
                              backgroundColor:
                                props.mode === "light" ? "white" : "#0B1423",
                              borderColor:
                                props.mode === "light" ? "#0B1423" : "white",
                            }}
                          />
                        </div>
                        {/* Submit Button */}
                        <div className="form-group col-lg-12 mx-auto mb-0">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block py-2 btnEnter"
                          >
                            <span className="font-weight-bold">
                              Change Password
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChange;
