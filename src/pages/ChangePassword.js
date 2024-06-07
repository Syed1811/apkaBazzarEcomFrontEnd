import React, { useState } from "react";
import { toast, Zoom } from "react-toastify";
import axios from "axios";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const ChangePassword = (props) => {
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("Handle submit triggered:", pass, cpass);
    e.preventDefault(); // Prevent the default form submission behavior

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
      return; // Prevent further execution if passwords do not match
    }

    try {
      // Make the API call to update the address
      const res = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/passUpdate",
        {
          email: props.userMail,
          password: pass,
        }
      );

      if (res.data.success) {
        // Display success toast message
        navigate("/login");
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
      } else {
        // Display warning toast message for API call failure
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
      // Handle API call error
      console.error(error);
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
              Change Password
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
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
                    id="cpass"
                    type="password"
                    name="cpass"
                    placeholder="Confirm Password"
                    value={cpass}
                    onChange={(e) => setCPass(e.target.value)}
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
                    <span className="font-weight-bold">Change Password</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
