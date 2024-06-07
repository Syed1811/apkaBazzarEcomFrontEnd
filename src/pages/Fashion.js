import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import heart from "../pages/img/icon/heart.png";
import compare from "../pages/img/icon/compare.png";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import { useFav } from "../context/fav";
import { toast, Zoom } from "react-toastify";

const Fashion = () => {
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
          `https://e-comm-2uyq.onrender.com/api/v1/product/multiple-categories/western_jeans-and-jeggings_famale-kurtas_salwar-kameez_sarees_lehnga_female-sports_female-long-wear_female-formal-shoe_female-sports-shoes_female-boots_female-sandals_heels_female-sunglass_female-reading-glasses_female-spectacle-frames_lenses_glasses-case_female-classic-watches_female-smart-watches_female-gold-watches_female-metal-watches_female-leather-watches_gold-jewellery_silver-jewellery_diamond-jewellery_artificial-jewellery`
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
      <section className="categories2">
        <div className="container2-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories2__item categories2__large__item set-bg"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?t=st=1710861827~exp=1710865427~hmac=c975ae6cade229d92a75c60bafebbaf802d2ebb87b6760801692eb26cac6e954&w=900")`,
                }}
              >
                <div className="categories2__text">
                  <h1>Women’s fashion</h1>
                  <NavLink to="/femaleFashion">Shop now</NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories2__item set-bg"
                    style={{
                      backgroundImage: `url("https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?size=626&ext=jpg&ga=GA1.1.205786380.1708864356&semt=ais")`,
                    }}
                  >
                    <div className="categories2__text">
                      <h4>Men’s fashion</h4>
                      <NavLink to="/mensFashion">Shop now</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories2__item set-bg"
                    style={{
                      backgroundImage: `url("https://img.freepik.com/free-photo/little-asian-girl-smiling-portrait_23-2149123018.jpg")`,
                    }}
                  >
                    <div className="categories2__text">
                      <h4>Kid’s fashion</h4>
                      <a href="#!">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories2__item set-bg"
                    style={{
                      backgroundImage: `url("https://img.freepik.com/free-photo/cream-kitted-bag-still-life_23-2150709569.jpg?t=st=1710862384~exp=1710865984~hmac=663e1b625f94548411a49d222380e4871041452340797cb0d9893bf1645a11c0&w=900")`,
                    }}
                  >
                    <div className="categories2__text">
                      <h4>Bags & Luggage</h4>
                      <a href="#!">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories2__item set-bg"
                    style={{
                      backgroundImage: `url("https://img.freepik.com/free-photo/woman-with-yoga-mat-practising-yoga_1303-13954.jpg?t=st=1712131950~exp=1712135550~hmac=a6cd77bdb2fbaf641aa001ee16c825c7a3fd74768ff5434064cb6117757bc56d&w=996")`,
                    }}
                  >
                    <div className="categories2__text">
                      <h4>Sports Wear</h4>
                      <a href="#!">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                      backgroundColor: "gold",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "gold" ? setColor("") : setColor("gold");
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
                      backgroundColor: "green",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      color === "green" ? setColor("") : setColor("green");
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

export default Fashion;
