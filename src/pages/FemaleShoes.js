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

const FemaleShoes = () => {
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
          `https://e-comm-2uyq.onrender.com/api/v1/product/multiple-categories/female-formal-shoe_female-sports-shoes_female-boots_female-sandals_heels`
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
            <NavLink className="ms-2" to="/heels">
              <img
                src="https://img.freepik.com/free-photo/women-s-red-high-heel-shoes-formal-fashion_53876-101501.jpg?t=st=1711367967~exp=1711371567~hmac=b0485fd0eabb409f958322f0dadb59c447dbab84f4697da6b264207222173d8a&w=900"
                alt=" 1"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "contain",
                  aspectRatio: "3 / 2",
                  backgroundColor: "#F4F4F4",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">Heels</h6>
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
            <NavLink to="/female-sandals">
              <img
                src="https://img.freepik.com/free-photo/flip-flops-beach-summer-fashion-aerial-view_53876-101225.jpg?t=st=1711367631~exp=1711371231~hmac=c40f12ce71fdb855b6f4ca70460b9ad7d90ea764c2d61fe65138b2cdf94f6584&w=740"
                alt=" 2"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">Sandals</h6>
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
            <NavLink to="/female-boots">
              <img
                src="https://img.freepik.com/free-photo/leather-boots_1203-8124.jpg?t=st=1711367769~exp=1711371369~hmac=9eac905b64f1d1fdbe8423e8f9b6a99bfe4a91d275c61f565ce8c124da060db7&w=360"
                alt=" 3"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "contain",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">Boots</h6>
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
            <NavLink to="/female-sports-shoes">
              <img
                src="https://img.freepik.com/free-photo/sports-girl-training-stadium_1157-25349.jpg?t=st=1711367874~exp=1711371474~hmac=d7bfd4020122a6596d271f46eb5bad81121e8c496b3548e8901c42895d3dbd48&w=900"
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
                Sports Shoes
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
            <NavLink to="/female-formal-shoes">
              <img
                src="https://img.freepik.com/free-photo/woman-wearing-classic-black-high-heel-toe-shoes-model-posing-street-elegant-outfit-close-up_158595-6716.jpg?t=st=1711367919~exp=1711371519~hmac=0f5c0b1920863865b347283a3d6bc6228758c7f5df9141cea7ea16085d12aae2&w=900"
                alt=" 3"
                className="rounded-circle"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  aspectRatio: "3 / 2",
                }}
              />
              <h6 className="bold pb-1 mt-1 text-dark text-center">Formal</h6>
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

export default FemaleShoes;
