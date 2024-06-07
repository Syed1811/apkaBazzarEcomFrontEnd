import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import heart from "../pages/img/icon/heart.png";
import compare from "../pages/img/icon/compare.png";
import { NavLink } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import { useCart } from "../context/cart";
import { useFav } from "../context/fav";

const SearchProduct = ({ queryCome }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useCart();
  const [fav, setFav] = useFav();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://e-comm-2uyq.onrender.com/api/v1/product/search/${queryCome}`
      );
      setSearchResults(response.data.products);
      setErrorMessage("");
    } catch (error) {
      setSearchResults([]);
      setErrorMessage("Error searching for products");
      console.error(error);
    }
  };

  useEffect(() => {
    if (queryCome) {
      handleSearch();
    }
    // eslint-disable-next-line
  }, [queryCome]);

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {searchResults.length === 0 && <p>No products found</p>}
      You searched for: {queryCome}
      <section className="product spad mt-5">
        <div className="container">
          <div className="row product__filter">
            {searchResults.map((product) => (
              <div
                key={product._id}
                className="col-lg-6 col-md-6 col-sm-6 col-md-6 col-sm-6 mix border"
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchProduct;
