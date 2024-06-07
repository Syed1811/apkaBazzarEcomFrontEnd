import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { LuIndianRupee } from "react-icons/lu";
import heart from "../pages/img/icon/heart.png";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";
import { useFav } from "../context/fav";
import compare from "../pages/img/icon/compare.png";
import { toast, Zoom } from "react-toastify";

const DetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [grocery, setGrocery] = useState([]);
  const [cart, setCart] = useCart();
  const [fav, setFav] = useFav();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://e-comm-2uyq.onrender.com/api/v1/product/get-product/${slug}`
        );
        // Assuming the product data is in response.data.product
        setProduct(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://e-comm-2uyq.onrender.com/api/v1/product/similar-four/${product?.category.slug}`
        );
        setGrocery(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsByCategory();
  }, [product?.category.slug]);

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                {product && (
                  <img
                    style={{
                      minWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={`https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${product._id}`}
                    alt={product.name}
                  />
                )}
              </div>
              {/* thumbs-wrap.// */}
              {/* gallery-wrap .end// */}
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                {product && (
                  <>
                    <h4 className="title text-dark">
                      <strong>{product.name}</strong>
                    </h4>
                    <div className="d-flex flex-row my-3">
                      <span className="text-muted">
                        <i className="fas fa-shopping-basket fa-sm mx-1" />
                        {product.quantity} left
                      </span>
                      <span className="text-success ms-2">
                        {product.quantity > 0 ? "In stock" : "Out of stock"}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <h5
                        className={`h6Home ${
                          product.sales === true
                            ? "text-decoration-line-through text-muted"
                            : ""
                        }`}
                      >
                        <LuIndianRupee />
                        {product.price}
                      </h5>
                      {product.sales === true && (
                        <h5 className="h6Home ms-1 text-danger">
                          {product.salePrice}
                        </h5>
                      )}
                    </div>
                    <p>{product.description}</p>
                    <hr />
                  </>
                )}
                <div className="row mb-4">
                  {/* col.// */}
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: 170 }}>
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder={14}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#!" className="btn btn-warning shadow-0">
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#!" className="btn btn-primary shadow-0 ms-2 me-2">
                  {" "}
                  <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                </a>
                <a
                  href="#!"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
      <section className="product spad mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls ulHome">
                <li className="active">Similar Products</li>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            {grocery.map((product) => (
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
                        )}{" "}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
