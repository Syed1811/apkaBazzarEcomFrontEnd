import React from "react";
import { NavLink } from "react-router-dom";
import makeUp from "./img/icon/makeover.png";
import homeandkitchen from "./img/icon/homeandkitchen.png";
import grocery from "./img/icon/grocery.png";
import stationary from "./img/icon/stationary.png";
import furniture from "./img/icon/furniture.png";
import eletronic from "./img/icon/eletronic.png";
import sports from "./img/icon/sports.png";
import fashion from "./img/icon/fashion.png";
const Categories = () => {
  return (
    <div>
      <h1 className="text-center fw-bold mt-5">Categories</h1>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={eletronic}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Electronic</p>
                  <p className="text-muted mb-0 text-discription">
                    Mobile, Laptop, TV, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/electronicItems">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={fashion}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Fashion</p>
                  <p className="text-muted mb-0 text-discription">
                    Men's, Women's, Kids etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/fashion">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={makeUp}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Beauty</p>
                  <p className="text-muted mb-0 text-discription">
                    Face, Hair, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/beauty">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={homeandkitchen}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Home & Kitchen</p>
                  <p className="text-muted mb-0 text-discription">
                    Home Appliances, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/homeandkitchen">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={sports}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Sports</p>
                  <p className="text-muted mb-0 text-discription">
                    Sports, Gym, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/sports">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={grocery}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Grocery</p>
                  <p className="text-muted mb-0 text-discription">
                    Vegetables, Fruits, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/grocery">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={stationary}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Stationary</p>
                  <p className="text-muted mb-0 text-discription">
                    Books, Pencils, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/stationary">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4 ">
          <div className="card categoryCard">
            <div className="card-body text-center">
              <div className="d-flex align-items-center">
                <img
                  src={furniture}
                  alt="makeup"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
                <div className="ms-3 div-text">
                  <p className="fw-bold mb-1 text-start">Furniture</p>
                  <p className="text-muted mb-0 text-discription">
                    Chairs, Tables, etc.
                  </p>
                </div>
              </div>
              <div className="contentCat">
                <NavLink className="text-dark" to="/furniture">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
