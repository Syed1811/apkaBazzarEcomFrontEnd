import React, { useState } from "react";
import { useAuth } from "../context/auth.js";
import { toast, Zoom } from "react-toastify";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const EditProfile = (props) => {
  const [auth, setAuth] = useAuth();
  const [fname, setfname] = useState(auth?.user?.first_name);
  const [lname, setlname] = useState(auth?.user?.last_name);
  const [pnumber, setpnumber] = useState(auth?.user?.phoneNumber);
  const [ccode] = useState(auth?.user?.countrycode);
  const [mail, setMail] = useState(auth?.user?.email);
  const [pinc, setpinc] = useState(auth?.user?.pincode);
  const [cityName, setcityName] = useState(auth?.user?.city);
  const [isEditing, setIsEditing] = useState(false);
  const [add, setAdd] = useState(auth?.user?.address);

  const navigate = useNavigate();

  const storedUser = auth ? auth.user : null;

  const {
    first_name,
    last_name,
    email,
    countrycode,
    phoneNumber,
    address,
    pincode,
    city,
  } = storedUser || {};

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make the API call to update the address
      const res = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/addUpdate",
        {
          email: mail,
          first_name: fname,
          last_name: lname,
          phoneNumber: pnumber,
          countrycode: ccode,
          address: add,
          pincode: pinc,
          city: cityName,
        }
      );

      if (res.data.success) {
        // Update the local state with the new address

        // Optionally, you can update the user data in the auth context state
        setAuth({
          ...auth,
          user: {
            ...auth.user,
            email: mail,
            first_name: fname,
            last_name: lname,
            phoneNumber: pnumber,
            countrycode: ccode,
            address: add,
            pincode: pinc,
            city: cityName,
          },
        });

        // Optionally, you can update the user data in local storage as well
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...auth,
            user: {
              ...auth.user,
              email: mail,
              first_name: fname,
              last_name: lname,
              phoneNumber: pnumber,
              countrycode: ccode,
              address: add,
              pincode: pinc,
              city: cityName,
            },
          })
        );

        // Display success toast message
        navigate("/dashboard/profile");
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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="content">
      <div className="main-body">
        {/* Breadcrumb */}
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div
              className="card"
              style={{
                color: props.mode === "dark" ? "white" : "#000000",
                backgroundColor: props.mode === "light" ? "white" : "#0B1423",
                border: `1px solid ${
                  props.mode === "light" ? "#0B1423" : "white"
                }`,
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
                    <h4>{first_name + " " + last_name}</h4>
                    <p
                      className="font-size-sm"
                      style={{
                        color: props.mode === "dark" ? "#a1a6a6" : "#000000",
                      }}
                    >
                      {address}
                    </p>
                    <button
                      className="btn btn-outline-warning me-1"
                      style={{
                        color: "#dc3545",
                      }}
                    >
                      Logout
                    </button>
                    <button className="btn btn-danger text-dark ms-1">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="card mb-3"
              style={{
                color: props.mode === "dark" ? "white" : "#000000",
                backgroundColor: props.mode === "light" ? "white" : "#0B1423",
                border: `1px solid ${
                  props.mode === "light" ? "#0B1423" : "white"
                }`,
              }}
            >
              <div className="card-body card-bodyProfile">
                <p className="card-heading">My Account</p>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-controlCategory"
                          value={fname}
                          onChange={(e) => setfname(e.target.value)}
                        />
                      ) : (
                        <span>
                          {first_name === "" ? "Not Provided" : first_name}
                        </span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-controlCategory"
                          value={lname}
                          onChange={(e) => setlname(e.target.value)}
                        />
                      ) : (
                        <span>
                          {last_name === "" ? "Not Provided" : last_name}
                        </span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {" "}
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-controlCategory"
                          value={mail}
                          onChange={(e) => setMail(e.target.value)}
                        />
                      ) : (
                        <span>{email === "" ? "Not Provided" : email}</span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {isEditing ? (
                        <div>
                          <input
                            type="text"
                            className="form-controlCategory"
                            value={pnumber}
                            onChange={(e) => setpnumber(e.target.value)}
                          />
                        </div>
                      ) : (
                        <span>
                          {countrycode || phoneNumber === ""
                            ? "Not Provided"
                            : countrycode + " " + phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {" "}
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-controlCategory"
                          value={add}
                          onChange={(e) => setAdd(e.target.value)}
                        />
                      ) : (
                        <span>{address === "" ? "Not Provided" : address}</span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Pin Code</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-controlCategory"
                          value={pinc}
                          onChange={(e) => setpinc(e.target.value)}
                        />
                      ) : (
                        <span>{pincode === "" ? "Not Provided" : pincode}</span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Town/City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-controlCategory"
                          value={cityName}
                          onChange={(e) => setcityName(e.target.value)}
                        />
                      ) : (
                        <span>{city === "" ? "Not Provided" : city}</span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row text-center">
                    <div className="col-sm-12">
                      <NavLink
                        className="btn btn-outline-success btn-edit me-1"
                        onClick={handleEditToggle}
                      >
                        Edit
                      </NavLink>
                      <button
                        type="submit"
                        className="btn btn-outline-success btn-edit ms-1"
                      >
                        Update
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
  );
};

export default EditProfile;
