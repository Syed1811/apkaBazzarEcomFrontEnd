import React, { useState } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { toast, Zoom } from "react-toastify";
import axios from "axios";

const CheckOut = () => {
  const [auth] = useAuth();
  const [cart] = useCart();
  const [shippingCost, setShippingCost] = useState(0);
  const [deliveryTypeName, setDeleveryTypeName] = useState(""); // Fixed typo in state name
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = 0;
      for (let item of cart) {
        if (item.sales) {
          total += item.salePrice;
        } else {
          total += item.price;
        }
      }
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const placeOrder = async () => {
    try {
      const orderData = {
        products: cart.map((item) => item._id),
        payment: {
          method: "COD", // Default to Cash on Delivery
        },
        buyerName: `${auth?.user?.first_name} ${auth?.user?.last_name}`,
        buyerPhone: auth?.user?.phoneNumber,
        buyerEmail: auth?.user?.email,
        buyerAddress: `${auth?.user?.address}, ${auth?.user?.city}, ${auth?.user?.pinCode}`,
        amount: parseFloat(totalPrice().replace(/\D/g, "")),
        deliveryType: deliveryTypeName, // Use the state variable directly
      };

      // Send POST request to backend to place the order
      const response = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/placeOrder",
        orderData
      );

      // Handle success
      toast.success(response.data.message);
      navigate("/");

      // Redirect or do anything else after placing the order
    } catch (error) {
      // Handle error
      console.error("Error placing order:", error);
      toast.error("Could not place order. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Your Info</h5>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <p className="mb-0">First name</p>
                      <div className="form-outline text-danger">
                        {auth?.user?.first_name}
                      </div>
                    </div>
                    <div className="col-6">
                      <p className="mb-0">Last name</p>
                      <div className="form-outline text-danger">
                        {auth?.user?.last_name}
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0">Phone</p>
                      <div className="form-outline text-danger">
                        {auth?.user?.phoneNumber}
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0">Email</p>
                      <div className="form-outline text-danger">
                        {auth?.user?.email}
                      </div>
                    </div>
                    <div className="col-12 mb-3 text-center">
                      <NavLink
                        className="btn btn-light btn-jelly"
                        to="/dashboard/updateprofile"
                      >
                        Update
                      </NavLink>
                    </div>
                  </div>
                  {/* Your Info form */}
                  {/* Shipping info */}
                  <hr className="my-4" />
                  <h5 className="card-title mb-3">Shipping info</h5>
                  <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            onChange={() => {
                              setShippingCost(150);
                              setDeleveryTypeName("Express");
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Express Delivery <br />
                            <small className="text-muted">
                              1-2 Days (<LuIndianRupee />
                              150)
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            onChange={() => {
                              setShippingCost(150);
                              setDeleveryTypeName("Fast");
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Fast Delivery
                            <br />
                            <small className="text-muted">
                              3-5 Days (<LuIndianRupee />
                              50)
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            defaultChecked
                            onChange={() => {
                              setShippingCost(150);
                              setDeleveryTypeName("Normal");
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Normal <br />
                            <small className="text-muted">
                              6-8 days (Free){" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Address form */}
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <p className="mb-0">Address</p>
                      <div className="form-outline">{auth?.user?.address}</div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <p className="mb-0">City</p>
                      <div className="form-outline">{auth?.user?.city}</div>
                    </div>

                    <div className="col-sm-6 col-6 mb-3">
                      <p className="mb-0">Zip</p>
                      <div className="form-outline">{auth?.user?.pincode}</div>
                    </div>
                    <div className="col-sm-12 mb-3 text-center">
                      <NavLink
                        className="btn btn-light btn-jelly"
                        to="/dashboard/updateprofile"
                      >
                        Update
                      </NavLink>
                    </div>
                  </div>

                  {/* Message to seller */}
                  <div className="mb-3">
                    <p className="mb-0">Message to seller</p>
                    <div className="form-outline text-danger border">
                      <textarea
                        className="form-control"
                        id="textAreaExample1"
                        rows={2}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="float-end">
                    <NavLink to="/" className="btn btn-light border">
                      Cancel
                    </NavLink>
                    <button
                      className="btn btn-success shadow-0 border"
                      onClick={placeOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: 320 }}>
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">{totalPrice()}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">
                    <LuIndianRupee />
                    {shippingCost}
                  </p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">{totalPrice() + shippingCost}</p>
                </div>
                <p className="mb-2 text-warning" style={{ fontSize: 12 }}>
                  Only Cash on Delivery
                </p>
                {/* Promo code input */}
                <div className="input-group mt-3 mb-4">
                  <input
                    type="text"
                    className="form-control border"
                    name
                    placeholder="Promo code"
                  />
                  <button className="btn text-dark border shadow-0">
                    Apply
                  </button>
                </div>
                <hr />
                {/* Cart items */}
                <h6 className="text-dark my-4">Items in cart</h6>
                {/* Render cart items */}
                {cart?.map((p) => (
                  <div className="d-flex mb-5">
                    <div className="cart-product-imitation">
                      <img
                        src={`https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${p._id}`}
                        alt="Product"
                        style={{
                          width: "90px",
                        }}
                      />
                    </div>
                    <div className="ms-3">
                      <h6>
                        <a
                          href="#!"
                          className="h6"
                          style={{
                            color: "#204969",
                          }}
                        >
                          {p.name}
                        </a>
                      </h6>
                      <p
                        className={`h6Home ${
                          p.sales === true
                            ? "text-decoration-line-through text-muted"
                            : ""
                        }`}
                      >
                        <LuIndianRupee />
                        {p.price}
                      </p>
                      {p.sales === true ? (
                        <p className="h6Home ms-1 text-danger">{p.salePrice}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
