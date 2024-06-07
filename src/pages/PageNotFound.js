import React from "react";
import { useNavigate } from "react-router-dom";
import NF from "./logo/404.png";

const PageNotFound = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="mainNF">
        <img
          src={NF}
          alt="Page Not Found"
          className="img-fluid"
          style={{
            width: "440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          className="errorHeadeing"
          style={{
            color: props.mode === "dark" ? "white" : "#000000",
          }}
        >
          The page you're loking for can't be found
        </p>
        <div className="form-group mx-auto mb-0">
          <button
            onClick={goBack}
            className="btn btn-primary btn-block py-2 homebtn"
          >
            <span className="font-weight-bold">Home</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
