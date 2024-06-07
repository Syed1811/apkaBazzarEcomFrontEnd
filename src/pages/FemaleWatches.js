import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import heart from "../pages/img/icon/heart.png";
import compare from "../pages/img/icon/compare.png";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import { useFav } from "../context/fav";
import { toast, Zoom } from "react-toastify";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const FemaleWatches = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState(null);
  const [brand, setBrand] = useState("");
  const [allBrand, setAllBrand] = useState([]);
  const [color, setColor] = useState("");
  const [cart, setCart] = useCart();
  const [fav, setFav] = useFav();
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://e-comm-2uyq.onrender.com/api/v1/product/multiple-categories/female-classic-watches_female-smart-watches_female-gold-watches_female-metal-watches_female-leather-watches`
        );
        setProducts(response.data.products);
        const brands = response.data.products.map((product) => product.brand);
        setAllBrand(brands);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, []);

  // Function to sort products based on price
  const sortProductsByPrice = () => {
    let sortedProducts = [...products]; // Create a copy of products array

    // Sort the products based on price
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.sales ? a.salePrice : a.price);
      const priceB = parseFloat(b.sales ? b.salePrice : b.price);

      if (priceA < priceB) return -1;
      if (priceA > priceB) return 1;
      return 0;
    });

    // Update the sorted products state
    setProducts(sortedProducts);
  };

  // Handle sort by price option change
  const handleSortByPriceChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "priceLowToHigh") {
      setSortByPrice("priceLowToHigh");
      sortProductsByPrice();
    } else if (selectedOption === "priceHighToLow") {
      setSortByPrice("priceHighToLow");
      sortProductsByPrice();
      setProducts([...products].reverse()); // Reverse the order to sort from high to low
    }
  };

  // filter on basis of brands
  const filteredProductsByBrand = products.filter((product) => {
    if (!brand) {
      return true;
    } else {
      return product.brand === brand;
    }
  });

  // Filter products based on color
  const filteredProductsByColor = filteredProductsByBrand.filter((product) => {
    if (!color) {
      return true;
    } else {
      const productColor = product.colour;
      return productColor.toLowerCase() === color;
    }
  });

  // Filter products based on price after applying brand and color filters
  const filteredProductsByPrice = filteredProductsByColor.filter((product) => {
    const productPrice = parseFloat(
      product.sales ? product.salePrice : product.price
    );
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (isNaN(min) && isNaN(max)) {
      return true;
    } else if (isNaN(min)) {
      return productPrice <= max;
    } else if (isNaN(max)) {
      return productPrice >= min;
    } else {
      return productPrice >= min && productPrice <= max;
    }
  });

  return (
    <>
      <section className="categories-slider-container-dress mt-2">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            pagination: false,
            perMove: 1,
            type: "loop",
            arrows: false,
            perPage: {
              1200: 5,
              992: 4,
              768: 3,
              576: 2,
            },
          }}
          aria-label="My Favorite Images"
          className="ms-2"
        >
          <SplideSlide className="d-flex flex-column align-items-center">
            <NavLink className="ms-2" to="/female-classic-watches">
              <img
                src="https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-lights-isolated_181624-28442.jpg?t=st=1711460674~exp=1711464274~hmac=2f18add264e54be3be8c08542a2df51a97552c0b821bba46e4b423f95405ef81&w=740"
                alt="1"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                  backgroundColor: "#F4F4F4",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">
                Classic Watches
              </h6>
              <hr
                className="text-dark ms-auto me-auto"
                style={{
                  width: "40%",
                  marginTop: "-10px",
                }}
              />
            </NavLink>
          </SplideSlide>
          <SplideSlide className="d-flex flex-column align-items-center">
            <NavLink to="/female-smart-watches">
              <img
                src="https://img.freepik.com/free-photo/unrecognizable-athletic-woman-with-smart-watch-checking-pulse-using-smartphone_1098-20256.jpg?t=st=1711460744~exp=1711464344~hmac=30c5be767a60af181827f0b88c8c7955c1957b7bc647d28e7c186e6f2af61d3c&w=900"
                alt=" 2"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">
                Smart Watches
              </h6>
              <hr
                className="text-dark ms-auto me-auto"
                style={{
                  width: "40%",
                  marginTop: "-10px",
                }}
              />
            </NavLink>
          </SplideSlide>
          <SplideSlide className="d-flex flex-column align-items-center">
            <NavLink to="/female-gold-watches">
              <img
                src="https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?w=740"
                alt=" 3"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">
                Gold Watches
              </h6>
              <hr
                className="text-dark ms-auto me-auto"
                style={{
                  width: "40%",
                  marginTop: "-10px",
                }}
              />
            </NavLink>
          </SplideSlide>
          <SplideSlide className="d-flex flex-column align-items-center">
            <NavLink to="/female-metal-watches">
              <img
                src="https://img.freepik.com/free-photo/woman-showing-her-nail-art-fingernails-with-watch_23-2149820446.jpg?t=st=1711460878~exp=1711464478~hmac=e7d14c5e5e13edb8d3b46cbf12f0504b103003da787eefa3e8e6a19a6db0d5ff&w=900"
                alt="3"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">
                Metal Watches
              </h6>
              <hr
                className="text-dark ms-auto me-auto"
                style={{
                  width: "40%",
                  marginTop: "-10px",
                }}
              />
            </NavLink>
          </SplideSlide>
          <SplideSlide className="d-flex flex-column align-items-center">
            <NavLink to="/female-leather-watches">
              <img
                src="https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241175.jpg?t=st=1711460942~exp=1711464542~hmac=727a61f6882ab2de9378ee32f745b8ca899fff0bcf3bdc3d654abc8c8b84912e&w=900"
                alt=" 3"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">
                Leather Watches
              </h6>
              <hr
                className="text-dark ms-auto me-auto"
                style={{
                  width: "40%",
                  marginTop: "-10px",
                }}
              />
            </NavLink>
          </SplideSlide>
        </Splide>
      </section>
      <section className="product spad mt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-4 col-sm-12 mb-2"
              style={{
                height: "fit-content",
                backgroundColor: "#f3f2ee",
              }}
            >
              <div className="pricefilter mb-3">
                <div className="price-sort mt-4 mb-2 me-2 ms-auto ms-auto">
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex flex-row">
                      <h6
                        style={{
                          fontSize: "14px",
                          marginTop: "6%",
                        }}
                      >
                        Price:
                      </h6>
                      <div className="field">
                        <input
                          style={{
                            maxWidth: "120px",
                            fontSize: "14px",
                            height: "40px",
                            width: "70px",
                            border: "none",
                          }}
                          type="text"
                          className="input-min"
                          value={minPrice}
                          placeholder="Min"
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                      </div>
                      <div className="mt-2 ms-2">-</div>
                      <div className="field ms-2">
                        <input
                          style={{
                            maxWidth: "120px",
                            fontSize: "14px",
                            height: "40px",
                            width: "70px",
                            border: "none",
                          }}
                          type="text"
                          value={maxPrice}
                          placeholder="Max"
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="input-max"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-sort mt-4 mb-2 ms-auto me-auto">
                  <h6 className="text-uppercase d-md-block d-none">Sort</h6>
                  <div className="d-flex flex-column">
                    <select
                      className="searchbycategory w-100"
                      id="category"
                      value={sortByPrice}
                      onChange={handleSortByPriceChange}
                      style={{
                        maxWidth: "154px",
                        fontSize: "14px",
                        border: "1px solid red",
                        backgroundColor: "white",
                        borderRadius: "0px",
                        height: "42px",
                        textAlign: "center",
                      }}
                    >
                      <option value="">Sort By Price</option>
                      <option value="priceLowToHigh">Price: Low to High</option>
                      <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                  </div>
                </div>
                <div className="price-sort mt-4 mb-2 ms-auto me-auto">
                  <h6 className="text-uppercase d-md-block d-none">Brands</h6>
                  <div className="d-flex flex-column">
                    <select
                      className="searchbycategory w-100"
                      id="category"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      style={{
                        maxWidth: "154px",
                        fontSize: "14px",
                        border: "1px solid red",
                        backgroundColor: "white",
                        borderRadius: "0px",
                        height: "42px",
                        textAlign: "center",
                      }}
                    >
                      <option value="">All</option>
                      {allBrand.map((brand, index) => (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="price-sort mt-4 mb-4 me-auto">
                <h6 className="text-uppercase d-md-block d-none">Colour</h6>
                <div className="d-flex flex-row">
                  <h6 className="ms-3 d-block d-md-none">Color: </h6>
                  <div
                    className="w-10 ms-2 me-1"
                    style={{
                      backgroundColor: "red",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "red" ? setColor("") : setColor("red");
                    }}
                  ></div>
                  <div
                    className="w-10 me-1"
                    style={{
                      backgroundColor: "black",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "black" ? setColor("") : setColor("black");
                    }}
                  ></div>
                  <div
                    className="w-10 me-1"
                    style={{
                      backgroundColor: "white",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "white" ? setColor("") : setColor("white");
                    }}
                  ></div>
                  <div
                    className="w-10 me-1"
                    style={{
                      backgroundColor: "brown",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "brown" ? setColor("") : setColor("brown");
                    }}
                  ></div>
                  <div
                    className="w-10 me-1"
                    style={{
                      backgroundColor: "blue",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "blue" ? setColor("") : setColor("blue");
                    }}
                  ></div>
                  <div
                    className="w-10 me-1"
                    style={{
                      backgroundColor: "wheat",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "wheat" ? setColor("") : setColor("wheat");
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              {/* Product grid */}
              <div className="row product__filter">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  filteredProductsByPrice.map((product) => (
                    <div
                      key={product._id}
                      className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
                    >
                      <div className="product__item">
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
                                <img
                                  className="imgHome"
                                  src={compare}
                                  alt="OK"
                                />
                                <span>Compare</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__item__text">
                          <h6 className="h6Home">{product.name}</h6>
                          <h6 className="h6Home">{product.brand}</h6>
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
                          <div
                            className={`rating ${
                              product.quantity > 5 ? "d-none" : ""
                            }`}
                          >
                            <p className="pHome">
                              {" "}
                              Only {product.quantity} left in stock.
                            </p>
                          </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FemaleWatches;
