import React from "react";
import { LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

import { LuFacebook } from "react-icons/lu";
import { NavLink } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <div>
        <section className="w3l-banner-slider-main inner-pagehny">
          <div className="breadcrumb-infhny">
            <div className="top-header-content">
              <div className="breadcrumb-contentnhy">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <h2 className="hny-title text-center">About Us</h2>
                    <ol className="breadcrumb mb-0">
                      <li>
                        <NavLink href="/">Home</NavLink>
                        <span className="fa fa-angle-double-right" />
                      </li>
                      <li className="active">About</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-wecome-content-6">
          {/* /content-6-section */}
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <div className="welcome-grids row">
                <div className="col-lg-6 mb-lg-0 mb-5">
                  <h3 className="hny-title">
                    About Our apka<span>Bazzar</span>
                  </h3>
                  <p className="my-4">
                    Discover seamless grocery shopping at ApkaBazzar – where
                    online convenience meets in-store authenticity. We offer a
                    diverse range of high-quality products at competitive
                    prices, enhancing well-being.
                  </p>
                  <p className="mb-4">
                    Our mission is to redefine grocery shopping with fresh,
                    wholesome, and ethically sourced products. Join us in
                    transforming your grocery experience – where quality meets
                    convenience, and community thrives.
                  </p>
                  <div className="read">
                    <NavLink to="/" className="read-more btn">
                      Shop Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 welcome-image">
                  <img
                    src="https://img.freepik.com/free-photo/3d-illustration-smartphone-with-store-screen-with-gift-boxes-side_58466-14580.jpg?w=900"
                    className="img-fluid"
                    alt="a"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //content-6-section */}
        <section className="features-4">
          <div className="features4-block py-5">
            <div className="container py-lg-5">
              <h6>We are the best</h6>
              <h3 className="hny-title text-center">
                What We <span>Offering</span>
              </h3>
              <div className="features4-grids text-center row mt-5">
                <div className="col-lg-3 col-md-6 features4-grid">
                  <div className="features4-grid-inn">
                    <span
                      className="fa fa-bullhorn icon-fea4"
                      aria-hidden="true"
                    />
                    <h5>
                      <a href="#!">Call Us Anytime</a>
                    </h5>
                    <p>
                      Offering customer support around the clock. We're here for
                      you, whenever you need us.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 features4-grid sec-features4-grid">
                  <div className="features4-grid-inn">
                    <span
                      className="fa fa-truck icon-fea4"
                      aria-hidden="true"
                    />
                    <h5>
                      <a href="#!">Free Shipping</a>
                    </h5>
                    <p>
                      Enjoy the convenience of free shipping on all orders. It's
                      our way of saying thank you.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 features4-grid">
                  <div className="features4-grid-inn">
                    <span
                      className="fa fa-recycle icon-fea4"
                      aria-hidden="true"
                    />
                    <h5>
                      <a href="#!">Free Returns</a>
                    </h5>
                    <p>
                      Shop worry-free with our hassle-free return policy. Your
                      satisfaction is our priority.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 features4-grid">
                  <div className="features4-grid-inn">
                    <span
                      className="fa fa-money icon-fea4"
                      aria-hidden="true"
                    />
                    <h5>
                      <a href="#!">Secured Payments</a>
                    </h5>
                    <p>
                      Rest easy knowing your payments are secured. Your safety
                      is paramount to us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* features-4 */}
        {/*/team-sec*/}
        <section className="w3l-team-main">
          <div className="team py-5">
            <div className="container py-lg-5">
              <h3 className="hny-title text-center">
                Meet the <span>Team</span>
              </h3>
              <div className="row team-row justify-content-center mt-5">
                <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative d-flex justify-content-center">
                  <div className="team_info mt-3 position-relative text-center">
                    <img
                      src="https://t3.ftcdn.net/jpg/05/90/59/88/360_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
                      alt="ds"
                    />
                    <h3>
                      <a href="#!" className="team_name">
                        Syed Raiyanullah
                      </a>
                    </h3>
                    <ul className="team-social mt-3">
                      <li>
                        <a href="#!">
                          <LuFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <FaXTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <LuInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <LuLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end team member */}
                <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4 team-wrapper position-relative d-flex justify-content-center">
                  <div className="team_info mt-3 position-relative text-center">
                    <img
                      src="https://t3.ftcdn.net/jpg/06/83/27/18/240_F_683271859_IwxKLXDNbLxUhrFjkvjeqI0ezceQuNXW.jpg"
                      alt="a"
                      height="330px"
                    />
                    <h3>
                      <a href="#!" className="team_name">
                        Abhishik Rana
                      </a>
                    </h3>
                    <ul className="team-social mt-3">
                      <li>
                        <a href="#!">
                          <LuFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <FaXTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <LuInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <LuLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end team member */}
              </div>
            </div>
          </div>
        </section>

        {/*//team-sec*/}
      </div>
    </>
  );
};

export default AboutUs;
