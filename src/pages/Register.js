import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdPerson, IoIosMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logo from "./logo/registerbg.png";
import axios from "axios";

const Register = (props) => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [countrycode, setcountrycode] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = "";
    // Check if any of the required fields are empty
    if (
      first_name.trim() === "" ||
      last_name.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      password.trim() === "" ||
      cpassword.trim() === ""
    ) {
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

    // Check if password and confirm password match
    if (password !== cpassword) {
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

    // If all validations pass, you can proceed with further actions

    try {
      res = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/register",
        {
          first_name,
          last_name,
          email,
          countrycode,
          phoneNumber,
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
        navigate("/login");
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
      toast.error("User is already registered", {
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
  };

  return (
    <>
      {/* Navbar*/}
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <h1
              style={{
                color: props.mode === "dark" ? "#a1a6a6" : "#204969",
              }}
            >
              Create an Account
            </h1>
            <p
              className="font-italic mb-0"
              style={{
                color: props.mode === "dark" ? "#a1a6a6" : "#000000",
              }}
            >
              Welcome to <mark>ApkaBazzars</mark> - Your Ultimate Shopping
              Destination!
              <br />
              Sign up now to experience a world of convenience and exclusive
              deals.
              <br /> Join ApkaBazzar today and elevate your shopping experience!
            </p>
            <img
              src={Logo}
              alt="icon"
              className="img-fluid mb-5 d-md-block"
            ></img>
          </div>
          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <h1
              style={{
                color: props.mode === "dark" ? "#a1a6a6" : "#204969",
              }}
            >
              SignUp
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                        borderRadius: "8px 0px 0px 8px",
                      }}
                    >
                      <IoMdPerson />
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={first_name}
                    onChange={(e) => setfirst_name(e.target.value)}
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  />
                </div>
                {/* Last Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                        borderRadius: "8px 0px 0px 8px",
                      }}
                    >
                      <IoMdPerson />
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    value={last_name}
                    onChange={(e) => setlast_name(e.target.value)}
                    placeholder="Last Name"
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  />
                </div>
                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
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
                    onChange={(e) => setemail(e.target.value.toLowerCase())}
                    placeholder="Email Address"
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  />
                </div>
                {/* Phone Number */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                        borderRadius: "8px 0px 0px 8px",
                      }}
                    >
                      <FaPhoneAlt />
                    </span>
                  </div>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={countrycode}
                    onChange={(e) => setcountrycode(e.target.value)}
                    className="custom-select form-control  border-md h-100 font-weight-bold rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  >
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="DZ"
                      value="213"
                    >
                      Algeria (+213)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AD"
                      value="376"
                    >
                      Andorra (+376)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AO"
                      value="244"
                    >
                      Angola (+244)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AI"
                      value="1264"
                    >
                      Anguilla (+1264)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AG"
                      value="1268"
                    >
                      Antigua &amp; Barbuda (+1268)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AR"
                      value="54"
                    >
                      Argentina (+54)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AM"
                      value="374"
                    >
                      Armenia (+374)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AW"
                      value="297"
                    >
                      Aruba (+297)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AU"
                      value="61"
                    >
                      Australia (+61)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AT"
                      value="43"
                    >
                      Austria (+43)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AZ"
                      value="994"
                    >
                      Azerbaijan (+994)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BS"
                      value="1242"
                    >
                      Bahamas (+1242)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BH"
                      value="973"
                    >
                      Bahrain (+973)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BD"
                      value="880"
                    >
                      Bangladesh (+880)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BB"
                      value="1246"
                    >
                      Barbados (+1246)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BY"
                      value="375"
                    >
                      Belarus (+375)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BE"
                      value="32"
                    >
                      Belgium (+32)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BZ"
                      value="501"
                    >
                      Belize (+501)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BJ"
                      value="229"
                    >
                      Benin (+229)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BM"
                      value="1441"
                    >
                      Bermuda (+1441)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BT"
                      value="975"
                    >
                      Bhutan (+975)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BO"
                      value="591"
                    >
                      Bolivia (+591)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BA"
                      value="387"
                    >
                      Bosnia Herzegovina (+387)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BW"
                      value="267"
                    >
                      Botswana (+267)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BR"
                      value="55"
                    >
                      Brazil (+55)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BN"
                      value="673"
                    >
                      Brunei (+673)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BG"
                      value="359"
                    >
                      Bulgaria (+359)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BF"
                      value="226"
                    >
                      Burkina Faso (+226)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="BI"
                      value="257"
                    >
                      Burundi (+257)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KH"
                      value="855"
                    >
                      Cambodia (+855)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CM"
                      value="237"
                    >
                      Cameroon (+237)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CA"
                      value="1"
                    >
                      Canada (+1)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CV"
                      value="238"
                    >
                      Cape Verde Islands (+238)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KY"
                      value="1345"
                    >
                      Cayman Islands (+1345)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CF"
                      value="236"
                    >
                      Central African Republic (+236)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CL"
                      value="56"
                    >
                      Chile (+56)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CN"
                      value="86"
                    >
                      China (+86)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CO"
                      value="57"
                    >
                      Colombia (+57)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KM"
                      value="269"
                    >
                      Comoros (+269)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CG"
                      value="242"
                    >
                      Congo (+242)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CK"
                      value="682"
                    >
                      Cook Islands (+682)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CR"
                      value="506"
                    >
                      Costa Rica (+506)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="HR"
                      value="385"
                    >
                      Croatia (+385)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CU"
                      value="53"
                    >
                      Cuba (+53)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CY"
                      value="90392"
                    >
                      Cyprus North (+90392)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CY"
                      value="357"
                    >
                      Cyprus South (+357)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CZ"
                      value="42"
                    >
                      Czech Republic (+42)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="DK"
                      value="45"
                    >
                      Denmark (+45)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="DJ"
                      value="253"
                    >
                      Djibouti (+253)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="DM"
                      value="1809"
                    >
                      Dominica (+1809)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="DO"
                      value="1809"
                    >
                      Dominican Republic (+1809)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="EC"
                      value="593"
                    >
                      Ecuador (+593)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="EG"
                      value="20"
                    >
                      Egypt (+20)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SV"
                      value="503"
                    >
                      El Salvador (+503)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GQ"
                      value="240"
                    >
                      Equatorial Guinea (+240)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ER"
                      value="291"
                    >
                      Eritrea (+291)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="EE"
                      value="372"
                    >
                      Estonia (+372)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ET"
                      value="251"
                    >
                      Ethiopia (+251)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="FK"
                      value="500"
                    >
                      Falkland Islands (+500)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="FO"
                      value="298"
                    >
                      Faroe Islands (+298)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="FJ"
                      value="679"
                    >
                      Fiji (+679)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="FI"
                      value="358"
                    >
                      Finland (+358)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="FR"
                      value="33"
                    >
                      France (+33)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GF"
                      value="594"
                    >
                      French Guiana (+594)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PF"
                      value="689"
                    >
                      French Polynesia (+689)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GA"
                      value="241"
                    >
                      Gabon (+241)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GM"
                      value="220"
                    >
                      Gambia (+220)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GE"
                      value="7880"
                    >
                      Georgia (+7880)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="DE"
                      value="49"
                    >
                      Germany (+49)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GH"
                      value="233"
                    >
                      Ghana (+233)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GI"
                      value="350"
                    >
                      Gibraltar (+350)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GR"
                      value="30"
                    >
                      Greece (+30)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GL"
                      value="299"
                    >
                      Greenland (+299)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GD"
                      value="1473"
                    >
                      Grenada (+1473)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GP"
                      value="590"
                    >
                      Guadeloupe (+590)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GU"
                      value="671"
                    >
                      Guam (+671)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GT"
                      value="502"
                    >
                      Guatemala (+502)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GN"
                      value="224"
                    >
                      Guinea (+224)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GW"
                      value="245"
                    >
                      Guinea - Bissau (+245)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GY"
                      value="592"
                    >
                      Guyana (+592)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="HT"
                      value="509"
                    >
                      Haiti (+509)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="HN"
                      value="504"
                    >
                      Honduras (+504)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="HK"
                      value="852"
                    >
                      Hong Kong (+852)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="HU"
                      value="36"
                    >
                      Hungary (+36)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IS"
                      value="354"
                    >
                      Iceland (+354)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IN"
                      value="91"
                    >
                      India (+91)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ID"
                      value="62"
                    >
                      Indonesia (+62)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IR"
                      value="98"
                    >
                      Iran (+98)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IQ"
                      value="964"
                    >
                      Iraq (+964)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IE"
                      value="353"
                    >
                      Ireland (+353)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IL"
                      value="972"
                    >
                      Israel (+972)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="IT"
                      value="39"
                    >
                      Italy (+39)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="JM"
                      value="1876"
                    >
                      Jamaica (+1876)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="JP"
                      value="81"
                    >
                      Japan (+81)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="JO"
                      value="962"
                    >
                      Jordan (+962)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KZ"
                      value="7"
                    >
                      Kazakhstan (+7)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KE"
                      value="254"
                    >
                      Kenya (+254)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KI"
                      value="686"
                    >
                      Kiribati (+686)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KP"
                      value="850"
                    >
                      Korea North (+850)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KR"
                      value="82"
                    >
                      Korea South (+82)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KW"
                      value="965"
                    >
                      Kuwait (+965)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KG"
                      value="996"
                    >
                      Kyrgyzstan (+996)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LA"
                      value="856"
                    >
                      Laos (+856)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LV"
                      value="371"
                    >
                      Latvia (+371)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LB"
                      value="961"
                    >
                      Lebanon (+961)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LS"
                      value="266"
                    >
                      Lesotho (+266)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LR"
                      value="231"
                    >
                      Liberia (+231)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LY"
                      value="218"
                    >
                      Libya (+218)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LI"
                      value="417"
                    >
                      Liechtenstein (+417)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LT"
                      value="370"
                    >
                      Lithuania (+370)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LU"
                      value="352"
                    >
                      Luxembourg (+352)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MO"
                      value="853"
                    >
                      Macao (+853)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MK"
                      value="389"
                    >
                      Macedonia (+389)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MG"
                      value="261"
                    >
                      Madagascar (+261)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MW"
                      value="265"
                    >
                      Malawi (+265)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MY"
                      value="60"
                    >
                      Malaysia (+60)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MV"
                      value="960"
                    >
                      Maldives (+960)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ML"
                      value="223"
                    >
                      Mali (+223)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MT"
                      value="356"
                    >
                      Malta (+356)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MH"
                      value="692"
                    >
                      Marshall Islands (+692)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MQ"
                      value="596"
                    >
                      Martinique (+596)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MR"
                      value="222"
                    >
                      Mauritania (+222)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="YT"
                      value="269"
                    >
                      Mayotte (+269)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MX"
                      value="52"
                    >
                      Mexico (+52)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="FM"
                      value="691"
                    >
                      Micronesia (+691)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MD"
                      value="373"
                    >
                      Moldova (+373)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MC"
                      value="377"
                    >
                      Monaco (+377)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MN"
                      value="976"
                    >
                      Mongolia (+976)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MS"
                      value="1664"
                    >
                      Montserrat (+1664)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MA"
                      value="212"
                    >
                      Morocco (+212)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MZ"
                      value="258"
                    >
                      Mozambique (+258)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="MN"
                      value="95"
                    >
                      Myanmar (+95)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NA"
                      value="264"
                    >
                      Namibia (+264)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NR"
                      value="674"
                    >
                      Nauru (+674)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NP"
                      value="977"
                    >
                      Nepal (+977)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NL"
                      value="31"
                    >
                      Netherlands (+31)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NC"
                      value="687"
                    >
                      New Caledonia (+687)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NZ"
                      value="64"
                    >
                      New Zealand (+64)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NI"
                      value="505"
                    >
                      Nicaragua (+505)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NE"
                      value="227"
                    >
                      Niger (+227)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NG"
                      value="234"
                    >
                      Nigeria (+234)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NU"
                      value="683"
                    >
                      Niue (+683)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NF"
                      value="672"
                    >
                      Norfolk Islands (+672)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NP"
                      value="670"
                    >
                      Northern Marianas (+670)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="NO"
                      value="47"
                    >
                      Norway (+47)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="OM"
                      value="968"
                    >
                      Oman (+968)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PW"
                      value="680"
                    >
                      Palau (+680)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PA"
                      value="507"
                    >
                      Panama (+507)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PG"
                      value="675"
                    >
                      Papua New Guinea (+675)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PY"
                      value="595"
                    >
                      Paraguay (+595)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PE"
                      value="51"
                    >
                      Peru (+51)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PH"
                      value="63"
                    >
                      Philippines (+63)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PL"
                      value="48"
                    >
                      Poland (+48)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PT"
                      value="351"
                    >
                      Portugal (+351)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="PR"
                      value="1787"
                    >
                      Puerto Rico (+1787)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="QA"
                      value="974"
                    >
                      Qatar (+974)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="RE"
                      value="262"
                    >
                      Reunion (+262)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="RO"
                      value="40"
                    >
                      Romania (+40)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="RU"
                      value="7"
                    >
                      Russia (+7)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="RW"
                      value="250"
                    >
                      Rwanda (+250)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SM"
                      value="378"
                    >
                      San Marino (+378)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ST"
                      value="239"
                    >
                      Sao Tome &amp; Principe (+239)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SA"
                      value="966"
                    >
                      Saudi Arabia (+966)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SN"
                      value="221"
                    >
                      Senegal (+221)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CS"
                      value="381"
                    >
                      Serbia (+381)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SC"
                      value="248"
                    >
                      Seychelles (+248)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SL"
                      value="232"
                    >
                      Sierra Leone (+232)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SG"
                      value="65"
                    >
                      Singapore (+65)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SK"
                      value="421"
                    >
                      Slovak Republic (+421)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SI"
                      value="386"
                    >
                      Slovenia (+386)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SB"
                      value="677"
                    >
                      Solomon Islands (+677)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SO"
                      value="252"
                    >
                      Somalia (+252)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ZA"
                      value="27"
                    >
                      South Africa (+27)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ES"
                      value="34"
                    >
                      Spain (+34)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="LK"
                      value="94"
                    >
                      Sri Lanka (+94)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SH"
                      value="290"
                    >
                      St. Helena (+290)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="KN"
                      value="1869"
                    >
                      St. Kitts (+1869)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SC"
                      value="1758"
                    >
                      St. Lucia (+1758)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SD"
                      value="249"
                    >
                      Sudan (+249)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SR"
                      value="597"
                    >
                      Suriname (+597)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SZ"
                      value="268"
                    >
                      Swaziland (+268)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SE"
                      value="46"
                    >
                      Sweden (+46)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="CH"
                      value="41"
                    >
                      Switzerland (+41)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="SI"
                      value="963"
                    >
                      Syria (+963)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TW"
                      value="886"
                    >
                      Taiwan (+886)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TJ"
                      value="7"
                    >
                      Tajikstan (+7)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TH"
                      value="66"
                    >
                      Thailand (+66)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TG"
                      value="228"
                    >
                      Togo (+228)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TO"
                      value="676"
                    >
                      Tonga (+676)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TT"
                      value="1868"
                    >
                      Trinidad &amp; Tobago (+1868)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TN"
                      value="216"
                    >
                      Tunisia (+216)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TR"
                      value="90"
                    >
                      Turkey (+90)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TM"
                      value="7"
                    >
                      Turkmenistan (+7)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TM"
                      value="993"
                    >
                      Turkmenistan (+993)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TC"
                      value="1649"
                    >
                      Turks &amp; Caicos Islands (+1649)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="TV"
                      value="688"
                    >
                      Tuvalu (+688)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="UG"
                      value="256"
                    >
                      Uganda (+256)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="GB"
                      value="44"
                    >
                      UK (+44)
                    </option>{" "}
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="UA"
                      value="380"
                    >
                      Ukraine (+380)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="AE"
                      value="971"
                    >
                      United Arab Emirates (+971)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="UY"
                      value="598"
                    >
                      Uruguay (+598)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="US"
                      value="1"
                    >
                      USA (+1)
                    </option>{" "}
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="UZ"
                      value="7"
                    >
                      Uzbekistan (+7)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="VU"
                      value="678"
                    >
                      Vanuatu (+678)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="VA"
                      value="379"
                    >
                      Vatican City (+379)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="VE"
                      value="58"
                    >
                      Venezuela (+58)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="VN"
                      value="84"
                    >
                      Vietnam (+84)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="VG"
                      value="84"
                    >
                      Virgin Islands - British (+1284)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="VI"
                      value="84"
                    >
                      Virgin Islands - US (+1340)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="WF"
                      value="681"
                    >
                      Wallis &amp; Futuna (+681)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="YE"
                      value="969"
                    >
                      Yemen (North)(+969)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="YE"
                      value="967"
                    >
                      Yemen (South)(+967)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ZM"
                      value="260"
                    >
                      Zambia (+260)
                    </option>
                    <option
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                      }}
                      data-countrycode="ZW"
                      value="263"
                    >
                      Zimbabwe (+263)
                    </option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="form-control  border-md pl-3 rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  />
                </div>
                {/* Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
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
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="Password"
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  />
                </div>
                {/* Password Confirmation */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend inputSpan">
                    <span
                      className="input-group-text  px-4 border-md icon inputSpan"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#0B1423",
                        borderColor:
                          props.mode === "light" ? "#000000" : "white",
                        borderRadius: "8px 0px 0px 8px",
                      }}
                    >
                      <RiLockPasswordFill />
                    </span>
                  </div>
                  <input
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                    value={cpassword}
                    onChange={(e) => setcpassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="form-control  border-md rgisterInput"
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#0B1423",
                      borderColor: props.mode === "light" ? "#000000" : "white",
                    }}
                  />
                </div>
                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button className="btn btn-primary btn-block py-2 btnEnter">
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
                    Already Registered?{" "}
                    <NavLink to="/login" className="text-primary ml-2">
                      Login
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

export default Register;
