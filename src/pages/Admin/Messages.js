import React, { useState, useRef } from "react";
import { useAuth } from "../../context/auth";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
const Messages = ({ mail }) => {
  const [auth] = useAuth();
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [setResponse] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your backend API
      const response = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/sendMessage",
        {
          email: mail,
          subject: subject,
          message: message,
          sender: auth?.user?.email,
        }
      );

      // Handle the response
      toast.success(response.data.message, {
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

      console.log("Message sent successfully:", response.data.message);
      setResponse(response.data.message);
      setMessage("");
      setSubject("");
    } catch (error) {
      console.error("Error sending message:", error.message);
      setResponse("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="card border-success mb-3" style={{ width: "100%" }}>
      <div
        className="card-header"
        style={{
          border: "none",
        }}
      >
        <h6
          className="text-center"
          style={{
            fontWeight: "bloder",
            color: "#204969",
          }}
        >
          Send a Message
        </h6>
      </div>
      <hr className="my-0" />
      <form ref={formRef} onSubmit={handleSubmit}>
        <div
          className="card-body"
          style={{
            marginTop: "-25px",
          }}
        >
          <div className="row d-flex align-items-center">
            <div
              className="col-auto labelH"
              style={{
                fontWeight: "500",
              }}
            >
              To:{" "}
            </div>
            <div className="col input" style={{ marginLeft: "-25px" }}>
              <input
                type="email"
                value={mail}
                disabled="disabled"
                style={{
                  cursor: "not-allowed",
                }}
                className="form-controlMail w-100"
              />
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div
              className="labelH"
              style={{
                fontWeight: "500",
              }}
            >
              Subject:{" "}
            </div>
            <div className="input">
              <p className="card-text" style={{ marginLeft: "-10px" }}>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  type="text"
                  className="form-controlMail"
                  placeholder="Enter Subject"
                />
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div
              className="labelH"
              style={{
                fontWeight: "500",
              }}
            >
              Message:{" "}
            </div>
            <div className="input">
              <p className="card-text" style={{ marginLeft: "-10px" }}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="form-controlMail"
                  placeholder="Enter message"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button type="submit" className="btn btn-create btn-jelly">
            <IoIosSend size={15} /> Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Messages;
