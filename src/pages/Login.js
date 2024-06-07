import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from "./logo/loginbg.png";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.js";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setauth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    // Check if any of the required fields are empty
    if (email.trim() === "" || password.trim() === "") {
      toast.warning("Please Fill All Details", {
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
      return; // Prevent further execution if there are empty fields
    }

    // If all validations pass, you can proceed with further actions

    try {
      const res = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message, {
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

        setauth({
          ...auth,
          user: res.data.user,
          tocken: res.data.tocken,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
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
      console.log(error);
      toast.error("No User Found", {
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

    // Add your additional logic here, such as making an API call to register the user
  }

  return (
    <>
      {/* Navbar*/}
      <div className={`container`}>
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-3 mb-md-0">
            <h1
              style={{
                color: props.mode === "dark" ? "white" : "#204969",
              }}
            >
              Welcome back to ApkaBazzar
            </h1>
            <p
              className="font-italic mb-0"
              style={{
                color: props.mode === "dark" ? "#a1a6a6" : "#000000",
              }}
            >
              Ready to continue your shopping journey?
              <br /> Log in now and let the shopping spree begin!
            </p>
            <img
              src={Logo}
              alt="icon"
              className="img-fluid mb-3 d-md-block"
            ></img>
          </div>
          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <h1
              style={{
                color: props.mode === "dark" ? "white" : "#204969",
              }}
            >
              Login
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Email Address */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#0B1423" : "white",
                        borderRadius: "8px 0px 0px 8px",
                      }}
                    >
                      <IoIosMailUnread />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Email Address"
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#0B1423" : "white",
                    }}
                  />
                </div>
                {/* Password */}
                <div className="input-group col-lg-6 mb-2">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
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
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#0B1423" : "white",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <div className="mb-2">
                    <div className="col">
                      <NavLink to="/forgetPassword">Forgot password?</NavLink>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block py-2 btnEnter"
                  >
                    <span className="font-weight-bold">
                      Create your account
                    </span>
                  </button>
                </div>
                {/* Already Registered */}
                <div className="text-center w-100 mt-3">
                  <p
                    className="font-weight-bold"
                    style={{
                      color: props.mode === "dark" ? "#a1a6a6" : "#000000",
                    }}
                  >
                    New User?{" "}
                    <NavLink to="/register" className="text-primary ml-2">
                      Register
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
