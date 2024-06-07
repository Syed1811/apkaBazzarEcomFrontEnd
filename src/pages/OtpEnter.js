import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const OtpEnter = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/otpVerify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: props.userMail,
            otp,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
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

        // Navigate to the "/changePassword" route after successful OTP verification
        navigate("/changePassword");
      } else {
        console.error("Failed to verify OTP");
        // Handle OTP verification failure, you may display an error message or take other actions.
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle any other errors that might occur during the OTP verification process.
    }
  };

  return (
    <>
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
              Verify It's You
            </h1>
            <div className="text-center w-100 mt-3">
              <p className="font-weight-bold text-muted mb-1">
                An OTP has been sent to your email address: {props.userMail}
              </p>
            </div>
            <div className="otp-field mb-4">
              <OtpInput
                onChange={setOtp}
                value={otp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="otp-input"
                    style={{
                      width: "60px",
                      height: "40px",
                      margin: "0px 5px",
                    }}
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="form-group col-lg-12 mx-auto mb-0">
              <button
                type="button" // Change type to "button" to prevent form submission
                onClick={handleVerifyOTP}
                className="btn btn-primary btn-block py-2 btnEnter"
              >
                <span className="font-weight-bold">Verify OTP</span>
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
        </div>
      </div>
    </>
  );
};

export default OtpEnter;
