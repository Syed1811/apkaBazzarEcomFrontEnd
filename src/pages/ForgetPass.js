import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { toast, Zoom } from "react-toastify";

const ForgetPass = (props) => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/forgetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);

        toast.success(data.message, {
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
        // Wait for the toast to be dismissed before navigating
        props.setuserMail(email);
        navigate("/otpEnter");
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div>
      <div className={`container`}>
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-3 mb-md-0">
            <img
              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"
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
              Forget Your Password
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text px-4 border-md icon inputSpan"
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

                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block py-2 btnEnter"
                  >
                    <span className="font-weight-bold">Send OTP</span>
                  </button>
                </div>
                {/* Login Page*/}
                <div className="text-center w-100 mt-3">
                  <p
                    className="font-weight-bold"
                    style={{
                      color: props.mode === "dark" ? "#a1a6a6" : "#000000",
                    }}
                  >
                    Login?{" "}
                    <NavLink to="/login" className="text-primary ml-2">
                      Back to Login
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
