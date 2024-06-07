import React, { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";import { useCart } from "../context/cart";import { useFav } from "../context/fav";import { toast, Zoom } from "react-toastify";
import { LuIndianRupee } from "react-icons/lu";
import axios from "axios";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoMdStar,
} from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import { useFav } from "../context/fav";
import { toast, Zoom } from "react-toastify";
// import { FaHeart } from "react-icons/fa";
import heart from "./img/icon/heart.png";
import compare from "./img/icon/compare.png";
import banner1 from "./img/banner/banner-1.jpg";
import mixer from "./img/mixer.png";
import perfume from "./img/perfum.png";
import bag from "./img/bag.png";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HomePage = (props) => {
  const splideRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("*");
  const [OpenCollection, setOpenCollection] = useState("");
  const [cart, setCart] = useCart();
  const [fav, setFav] = useFav();
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 1,
    minutes: 50,
    seconds: 18,
  });
  const [topSaleProducts, setTopSaleProducts] = useState([]);
  const [newProducts, setnewProducts] = useState([]);
  const [mostSaleProducts, setMostSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/product/grocery-four/grocery"
        );
        setGrocery(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, []);

  useEffect(() => {
    const fetchTopSaleProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/product/top-4-products"
        );
        setTopSaleProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTopSaleProducts();
  }, []);

  useEffect(() => {
    const fetchTopSaleProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/product/random-product"
        );
        setMostSaleProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTopSaleProducts();
  }, []);
  useEffect(() => {
    const fetchTopSaleProducts = async () => {
      try {
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/product//latest-products"
        );
        setnewProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTopSaleProducts();
  }, []);

  const handlePrevSlide = () => {
    if (splideRef.current) {
      splideRef.current.go(currentIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go(currentIndex + 1);
    }
  };

  useEffect(() => {
    const splideInstance = splideRef.current.splide;

    const updateIndex = () => setCurrentIndex(splideInstance.index);

    splideInstance.on("moved", updateIndex);

    return () => {
      splideInstance.off("moved", updateIndex);
    };
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevCountdown;
        }

        const newCountdown = {
          days: days - (hours === 0 && minutes === 0 && seconds === 0 ? 1 : 0),
          hours:
            hours === 0 ? 23 : hours - (minutes === 0 && seconds === 0 ? 1 : 0),
          minutes: minutes === 0 ? 59 : minutes - (seconds === 0 ? 1 : 0),
          seconds: seconds === 0 ? 59 : seconds - 1,
        };

        return newCountdown;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <section className="hero">
        <Splide
          ref={splideRef}
          options={{
            type: "fade",
            rewind: true,
            arrows: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div
              className="hero__items set-bg"
              style={{
                backgroundImage:
                  'url("https://media.revistagq.com/photos/5cc6ff36c46d3a2cb135d550/16:9/w_1280,c_limit/Arthur-Kulkov-GQ-China-Louis-Vuitton-Fashion-Shoot-Men-008.jpg")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className="hero__text">
                      <h6 className="h6Home">LV Collection</h6>
                      <h2 className="h2Home">Louis Vuitton Collections 2024</h2>
                      <p>
                        A specialist label creating luxury essentials. Ethically
                        crafted with an unwavering commitment to exceptional
                        quality.
                      </p>
                      <NavLink to="/fashion" className="primary-btn">
                        Shop now <span className="arrow_right" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="splide__arrows">
                    <button
                      className={`pre splide__arrow splide__arrow heroNav ${
                        currentIndex === 0 ? "d-none" : ""
                      }`}
                      onClick={handlePrevSlide}
                    >
                      <IoIosArrowRoundBack />
                    </button>
                    <button
                      className="next splide__arrow splide__arrow--next heroNav"
                      onClick={handleNextSlide}
                    >
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="hero__items set-bg"
              style={{
                backgroundImage:
                  'url("https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/03/21000638/Lifestyle-Asia-KL-Tom-Ford-Beauty-Shu-Qi-1-min.jpg")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className="hero__text text-light">
                      <h6 className="h6Home">Beauty Collection</h6>
                      <h2 className="h2Home text-light">Tom Ford Beauty</h2>
                      <p>
                        A specialist label creating luxury essentials. Ethically
                        crafted with an unwavering commitment to exceptional
                        quality.
                      </p>
                      <NavLink to="/beauty" className="primary-btn">
                        Shop now <span className="arrow_right" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="splide__arrows">
                    <button
                      className="pre splide__arrow splide__arrow heroNav"
                      onClick={handlePrevSlide}
                    >
                      <IoIosArrowRoundBack />
                    </button>
                    <button
                      className="next splide__arrow splide__arrow--next heroNav"
                      onClick={handleNextSlide}
                    >
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="hero__items set-bg"
              style={{
                backgroundImage:
                  'url("https://pixelplex.io/wp-content/uploads/2023/06/overview-of-apple-vision-pro-and-its-prospects-main-1600.jpg")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className="hero__text text-light">
                      <h6 className="h6Home">Apple Collection</h6>
                      <h2 className="h2Home text-light">
                        Apple Vision Pro 2024
                      </h2>
                      <p>
                        A specialist label creating luxury essentials. Ethically
                        crafted with an unwavering commitment to exceptional
                        quality.
                      </p>
                      <NavLink to="/electronicItems" className="primary-btn">
                        Shop now <span className="arrow_right" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="splide__arrows">
                    <button
                      className="pre splide__arrow splide__arrow heroNav"
                      onClick={handlePrevSlide}
                    >
                      <IoIosArrowRoundBack />
                    </button>
                    <button
                      className={`next splide__arrow splide__arrow--next heroNav ${
                        currentIndex === 2 ? "d-none" : ""
                      }`}
                      onClick={handleNextSlide}
                    >
                      <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          {/* <SplideSlide>
            <img src="image3.jpg" alt="Image 3" />
          </SplideSlide> */}
        </Splide>
      </section>
      {/* Hero Section End */}
      {/* Banner Section Begin */}
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img className="imgHome" src={banner1} alt="OK" />
                </div>
                <div className="banner__item__text">
                  <h2 className="h2Home">Fashion Collections 2024</h2>
                  <NavLink className="aHome" to="/fashion">
                    Shop now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img
                    className="imgHome"
                    src="https://saladswithanastasia.com/wp-content/uploads/2020/01/VEGGIE-WASH.jpg"
                    alt="OK"
                  />
                </div>
                <div className="banner__item__text">
                  <h2 className="h2Home">Fresh</h2>
                  <NavLink className="aHome" to="/fresh">
                    Shop now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img
                    className="imgHome"
                    src="https://t3.ftcdn.net/jpg/02/71/05/60/360_F_271056073_C0tbpNLFbcGurqxoMXqPBrx8vzL9VLVY.jpg"
                    alt="OK"
                  />
                </div>
                <div className="banner__item__text">
                  <h2 className="h2Home">Furniture</h2>
                  <NavLink className="aHome" to="/furniture">
                    Shop now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls ulHome">
                <li
                  onClick={() => {
                    setActiveFilter("*");
                  }}
                  className={activeFilter === "*" ? "active" : ""}
                  data-filter="*"
                >
                  Best Sellers
                </li>
                <li
                  onClick={() => {
                    setActiveFilter(".new-arrivals");
                  }}
                  className={activeFilter === ".new-arrivals" ? "active" : ""}
                  data-filter=".new-arrivals"
                >
                  New Arrivals
                </li>
                <li
                  onClick={() => {
                    setActiveFilter(".hot-sales");
                  }}
                  className={activeFilter === ".hot-sales" ? "active" : ""}
                  data-filter=".hot-sales"
                >
                  Hot Sales
                </li>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              newProducts.map((product) => (
                <div
                  key={product._id}
                  className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${
                    activeFilter === ".new-arrivals" ? "" : "d-none"
                  }`}
                >
                  <div className="product__item sale">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage: `url(https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${product._id})`,
                      }}
                    >
                      <span className="label">Sale</span>
                      <ul className="product__hover ulHome">
                        <li>
                          <a
                            className="aHome"
                            href="#!"
                            onClick={() => {
                              setFav([...fav, product]);
                              toast.success("Added to Favorite", {
                                position: "bottom-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Zoom,
                              });
                            }}
                          >
                            <img className="imgHome" src={heart} alt="OK" />{" "}
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li>
                          <a className="aHome" href="#!">
                            <img className="imgHome" src={compare} alt="OK" />
                            <span>Compare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <div style={{ display: "flex" }}>
                        <h6 className="h6Home">{product.name}</h6>
                        <h6 className="h6Home ms-auto">{product.brand}</h6>
                      </div>
                      <button
                        className="aHome add-cart"
                        href="#!"
                        onClick={() => {
                          setCart([...cart, product]);
                          toast.success("Added to cart", {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Zoom,
                          });
                        }}
                      >
                        + Add To Cart
                      </button>
                      <p
                        className={`pHome ${
                          product.quantity > 5 ? "d-none" : ""
                        }`}
                      >
                        {" "}
                        Only {product.quantity} left in stock.
                      </p>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <h6
                          className={`h6Home ${
                            product.sales === true
                              ? "text-decoration-line-through text-muted"
                              : ""
                          }`}
                        >
                          <LuIndianRupee />
                          {product.price}
                        </h6>
                        {product.sales === true ? (
                          <h6 className="h6Home ms-1 text-danger">
                            {product.salePrice}
                          </h6>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              mostSaleProducts.map((product) => (
                <div
                  key={product._id}
                  className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${
                    activeFilter === "*" ? "" : "d-none"
                  }`}
                >
                  <div className="product__item sale">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage: `url(https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${product._id})`,
                      }}
                    >
                      <span className="label">
                        <IoMdStar></IoMdStar>
                      </span>
                      <ul className="product__hover ulHome">
                        <li>
                          <a
                            className="aHome"
                            href="#!"
                            onClick={() => {
                              setFav([...fav, product]);
                              toast.success("Added to Favorite", {
                                position: "bottom-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Zoom,
                              });
                            }}
                          >
                            <img className="imgHome" src={heart} alt="OK" />{" "}
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li>
                          <a className="aHome" href="#!">
                            <img className="imgHome" src={compare} alt="OK" />
                            <span>Compare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <div style={{ display: "flex" }}>
                        <h6 className="h6Home">{product.name}</h6>
                        <h6 className="h6Home ms-auto">{product.brand}</h6>
                      </div>
                      <a
                        className="aHome add-cart"
                        href="#!"
                        onClick={() => {
                          setCart([...cart, product]);
                          toast.success("Added to cart", {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Zoom,
                          });
                        }}
                      >
                        + Add To Cart
                      </a>
                      <p
                        className={`pHome ${
                          product.quantity > 5 ? "d-none" : ""
                        }`}
                      >
                        {" "}
                        Only {product.quantity} left in stock.
                      </p>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <h6
                          className={`h6Home ${
                            product.sales === true
                              ? "text-decoration-line-through text-muted"
                              : ""
                          }`}
                        >
                          <LuIndianRupee />
                          {product.price}
                        </h6>
                        {product.sales === true ? (
                          <h6 className="h6Home ms-1 text-danger">
                            {product.salePrice}
                          </h6>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              topSaleProducts.map((product) => (
                <div
                  key={product._id}
                  className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${
                    activeFilter === ".hot-sales" ? "" : "d-none"
                  }`}
                >
                  <div className="product__item sale">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage: `url(https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${product._id})`,
                      }}
                    >
                      <span className="label">Sale</span>
                      <ul className="product__hover ulHome">
                        <li>
                          <a
                            className="aHome"
                            href="#!"
                            onClick={() => {
                              setFav([...fav, product]);
                              toast.success("Added to Favorite", {
                                position: "bottom-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Zoom,
                              });
                            }}
                          >
                            <img className="imgHome" src={heart} alt="OK" />{" "}
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li>
                          <a className="aHome" href="#!">
                            <img className="imgHome" src={compare} alt="OK" />
                            <span>Compare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <div style={{ display: "flex" }}>
                        <h6 className="h6Home">{product.name}</h6>
                        <h6 className="h6Home ms-auto">{product.brand}</h6>
                      </div>
                      <a
                        className="aHome add-cart"
                        href="#!"
                        onClick={() => {
                          setCart([...cart, product]);
                          toast.success("Added to cart", {
                            position: "bottom-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Zoom,
                          });
                        }}
                      >
                        + Add To Cart
                      </a>
                      <p
                        className={`pHome ${
                          product.quantity > 5 ? "d-none" : ""
                        }`}
                      >
                        {" "}
                        Only {product.quantity} left in stock.
                      </p>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <h6
                          className="h6Home text-decoration-line-through text-muted
                              "
                        >
                          <LuIndianRupee />
                          {product.price}
                        </h6>

                        <h6 className="h6Home ms-1 text-danger">
                          {product.salePrice}
                        </h6>
                        <NavLink
                          to={`/detailPage/${product.slug}`}
                          className="ms-auto text-dark"
                        >
                          View
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Product Section End */}
      {/* Categories Section Begin */}
      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="categories__text">
                <h2 className="h2Home">
                  <a
                    href="#!"
                    onClick={() => {
                      setOpenCollection("Stationary");
                    }}
                    className={`${
                      OpenCollection === "Stationary"
                        ? "text-dark"
                        : "text-muted"
                    }`}
                  >
                    Stationary
                  </a>{" "}
                  <br />
                  <a
                    href="#!"
                    onClick={() => {
                      setOpenCollection("Beauty");
                    }}
                    className={`${
                      OpenCollection === "Beauty" ? "text-dark" : "text-muted"
                    }`}
                  >
                    {" "}
                    Beauty{" "}
                  </a>
                  <br />
                  <a
                    href="#!"
                    onClick={() => {
                      setOpenCollection("Home & Kitchen");
                    }}
                    className={`${
                      OpenCollection === "Home & Kitchen"
                        ? "text-dark"
                        : "text-muted"
                    }`}
                  >
                    Home & Kitchen
                  </a>
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories__hot__deal">
                <img
                  className={`imgHome ${
                    OpenCollection === "Stationary" ? "" : "d-none"
                  }`}
                  src={bag}
                  alt="OK"
                />
                <img
                  className={`imgHome ${
                    OpenCollection === "Beauty" ? "" : "d-none"
                  }`}
                  src={perfume}
                  alt="OK"
                />
                <img
                  className={`imgHome ${
                    OpenCollection === "Home & Kitchen" ? "" : "d-none"
                  }`}
                  src={mixer}
                  alt="OK"
                />
                <div className="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5
                    className={`h5Home ${
                      OpenCollection === "Home & Kitchen" ? "" : "d-none"
                    }`}
                  >
                    <LuIndianRupee />
                    599.99
                  </h5>
                  <h5
                    className={`h5Home ${
                      OpenCollection === "Beauty" ? "" : "d-none"
                    }`}
                  >
                    <LuIndianRupee />
                    19212
                  </h5>
                  <h5
                    className={`h5Home ${
                      OpenCollection === "Stationary" ? "" : "d-none"
                    }`}
                  >
                    <LuIndianRupee />
                    2900.99
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2
                  className={`h2Home ${
                    OpenCollection === "Home & Kitchen" ? "" : "d-none"
                  }`}
                >
                  Home & Kitchen
                </h2>
                <h2
                  className={`h2Home ${
                    OpenCollection === "Stationary" ? "" : "d-none"
                  }`}
                >
                  Stationary
                </h2>
                <h2
                  className={`h2Home ${
                    OpenCollection === "Beauty" ? "" : "d-none"
                  }`}
                >
                  Beauty
                </h2>
                <div
                  className="categories__deal__countdown__timer"
                  id="countdown"
                >
                  <div className="cd-item">
                    <span>{countdown.days}</span>
                    <p className="pHome">Days</p>
                  </div>
                  <div className="cd-item">
                    <span>{countdown.hours}</span>
                    <p className="pHome">Hours</p>
                  </div>
                  <div className="cd-item">
                    <span>{countdown.minutes}</span>
                    <p className="pHome">Minutes</p>
                  </div>
                  <div className="cd-item">
                    <span>{countdown.seconds}</span>
                    <p className="pHome">Seconds</p>
                  </div>
                </div>

                <a className="aHome primary-btn me-2" href="#!">
                  Shop now
                </a>
                {OpenCollection === "Home & Kitchen" ? (
                  <NavLink className="aHome primary-btn" to="/homeandkitchen">
                    View More
                  </NavLink>
                ) : OpenCollection === "Stationary" ? (
                  <NavLink className="aHome primary-btn" to="/stationary">
                    View More
                  </NavLink>
                ) : OpenCollection === "Beauty" ? (
                  <NavLink className="aHome primary-btn" to="/beauty">
                    View More
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section End */}
      {/* Electronics Section Begin */}
      <section className="electronics spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 imgSectionElectronics">
              <div className="electronics__pic">
                <div
                  className="electronics__pic__item set-bg"
                  style={{
                    backgroundImage:
                      'url("https://colorworksnursery.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg")',
                  }}
                />
                <div
                  className="electronics__pic__item set-bg"
                  style={{
                    backgroundImage:
                      'url("https://images.samsung.com/au/smartphones/galaxy-s24-ultra/buy/product_color_gray.png")',
                  }}
                />
                <div
                  className="electronics__pic__item set-bg"
                  style={{
                    backgroundImage:
                      'url("https://cdn.shopify.com/s/files/1/0301/2263/9499/files/01-X90L-logo-final_627a0312-026a-4228-9a09-b9a315b89459_345x345@2x.jpg?v=1697699129")',
                  }}
                />
                <div
                  className="electronics__pic__item set-bg"
                  style={{
                    backgroundImage:
                      'url("https://rukminim2.flixcart.com/image/850/1000/kzrbiq80/computer/z/6/y/ideapad-5-14itl05-laptop-lenovo-original-imagbpf4ea5sfxrh.jpeg?q=90&crop=false")',
                  }}
                />
                <div
                  className="electronics__pic__item set-bg"
                  style={{
                    backgroundImage:
                      'url("https://content.jdmagicbox.com/quickquotes/images_main/lg-washing-machine-28-11-2022-027-272322426-b6dx6mxv.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit")',
                  }}
                />
                <div
                  className="electronics__pic__item set-bg"
                  style={{
                    backgroundImage:
                      'url("https://www.fastforwardipswich.co.uk/wp-content/uploads/2015/05/uk_RH56J69187F-7.jpeg")',
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="electronics__text">
                <h2 className="h2Home">Electronics</h2>
                <p className="pHome">
                  Explore the future at your fingertips with our Electronics
                  section. From the latest gadgets to cutting-edge appliances,
                  discover a world of innovation and convenience. Elevate your
                  lifestyle with top-notch brands and stay connected with the
                  latest in tech. Welcome to a smarter, more connected home!
                </p>
                <NavLink
                  className="aHome primary-btn me-2"
                  to="/electronicItemss"
                >
                  Shop now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Electronics Section End */}
      {/* Grogery Section Begin */}
      <section className="product spad mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls ulHome">
                <li className="active">Grocery</li>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              grocery.map((product) => (
                <div
                  key={product._id}
                  className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
                >
                  <div className="product__item">
                    <div className="product__item__wrapper">
                      <div
                        className="product__item__pic set-bg"
                        style={{
                          backgroundImage: `url(https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${product._id})`,
                        }}
                      >
                        <ul className="product__hover ulHome">
                          <li>
                            <a
                              className="aHome"
                              href="#!"
                              onClick={() => {
                                setFav([...fav, product]);
                                toast.success("Added to Favorite", {
                                  position: "bottom-right",
                                  autoClose: 3000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: "light",
                                  transition: Zoom,
                                });
                              }}
                            >
                              <img className="imgHome" src={heart} alt="OK" />{" "}
                              <span>Favorite</span>
                            </a>
                          </li>
                          <li>
                            <a className="aHome" href="#!">
                              <img className="imgHome" src={compare} alt="OK" />
                              <span>Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6 className="h6Home">{product.name}</h6>
                        <h6 className="h6Home">{product.brand}</h6>
                        <a
                          className="aHome add-cart"
                          href="#!"
                          onClick={() => {
                            setCart([...cart, product]);
                            toast.success("Added to cart", {
                              position: "bottom-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                              transition: Zoom,
                            });
                          }}
                        >
                          + Add To Cart
                        </a>
                        <div
                          className={`rating ${
                            product.quantity > 5 ? "d-none" : ""
                          }`}
                        >
                          <p className="pHome">
                            Only {product.quantity} left in stock.
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <h6
                            className={`h6Home ${
                              product.sales
                                ? "text-decoration-line-through text-muted"
                                : ""
                            }`}
                          >
                            <LuIndianRupee /> {product.price}
                          </h6>
                          {product.sales && (
                            <h6 className="h6Home ms-1 text-danger">
                              {product.salePrice}
                            </h6>
                          )}
                        </div>
                        <div className="product__color__select">
                          <label htmlFor="pc-22">
                            <input
                              className="inputHome"
                              type="radio"
                              id="pc-22"
                            />
                          </label>
                          <label className="active black" htmlFor="pc-23">
                            <input
                              className="inputHome"
                              type="radio"
                              id="pc-23"
                            />
                          </label>
                          <label className="grey" htmlFor="pc-24">
                            <input
                              className="inputHome"
                              type="radio"
                              id="pc-24"
                            />
                          </label>
                        </div>
                        <NavLink
                          style={{
                            marginTop: "-30px",
                          }}
                          to="/grocery"
                        >
                          View More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
