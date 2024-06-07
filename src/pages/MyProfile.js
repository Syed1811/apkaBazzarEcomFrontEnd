import React from "react";
import { useAuth } from "../context/auth.js";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { MdVerified } from "react-icons/md";

const MyProfile = (props) => {
  const [auth, setauth] = useAuth();
  const navigate = useNavigate();
  const storedUser = auth ? auth.user : null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/sendEmailOTP",
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
        navigate("/verifyEmail");
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // Check if storedUser exists before accessing its properties
  const {
    first_name,
    last_name,
    email,
    countrycode,
    phoneNumber,
    address,
    verifiedEmail,
    pincode,
    city,
  } = storedUser || {};

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      tocken: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
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
      <div className="content">
        <div className="main-body">
          {/* Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div
                className="card"
                style={{
                  border: "1px solid black`,",
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
                        {first_name === "" || last_name === ""
                          ? "Not Provided"
                          : first_name + " " + last_name}
                      </h4>
                      <p className="font-size-sm">
                        {address === "" ? "Not Provided" : address}
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
                  <NavLink className="active" to="/dashboard/profile">
                    My Account
                  </NavLink>
                  <NavLink to="/dashboard/updatepassword">
                    Change Password
                  </NavLink>
                  <NavLink to="/dashboard/yourorder">My Orders</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="card mb-3"
                style={{
                  border: "1px solid black",
                }}
              >
                <div className="card-body card-bodyProfile">
                  <p className="card-heading">My Account</p>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {first_name === "" ? "Not Provided" : first_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {last_name === "" ? "Not Provided" : last_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">{email}</div>
                    <div className="verifed col-sm-3">
                      {verifiedEmail === true ? (
                        <>
                          <MdVerified
                            style={{
                              color: "green",
                              fontSize: "22px",
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <NavLink onClick={handleSubmit}>
                            <i
                              class="fas fa-circle-xmark"
                              style={{
                                color: "red",
                                fontSize: "19px",
                              }}
                            ></i>
                          </NavLink>
                        </>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      {countrycode || phoneNumber === ""
                        ? "Not Provided"
                        : countrycode + " " + phoneNumber}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {" "}
                      {address === "" ? "Not Provided" : address}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Pin Code</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {pincode === "" ? "Not Provided" : pincode}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Town/City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {city === "" ? "Not Provided" : city}
                    </div>
                  </div>
                  <hr />
                  <div className="row text-center">
                    <NavLink
                      className="btn btn-info btn-edit ms-auto me-auto"
                      to="/dashboard/updateprofile"
                      style={{
                        width: "30%",
                      }}
                    >
                      Edit
                    </NavLink>
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

export default MyProfile;
