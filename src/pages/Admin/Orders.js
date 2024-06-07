import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { toast, Zoom } from "react-toastify";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Orders = () => {
  const [auth] = useAuth();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Function to fetch orders
    const fetchOrders = async () => {
      try {
        // Make API call to fetch orders
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/auth/orders"
        );

        // Update state with fetched orders
        setOrders(response.data);
      } catch (error) {
        // Handle error if API call fails
        console.error("Error fetching orders:", error);
        toast.error("Failed to fetch orders", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
    };

    // Call the fetchOrders function when the component mounts
    fetchOrders();
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  const updateOrderStatus = async (orderId, status) => {
    try {
      // Make API call to update order status
      await axios.put(
        `https://e-comm-2uyq.onrender.com/api/v1/auth/orders/${orderId}/status`,
        {
          status: status,
        }
      );

      // Fetch updated orders
      const response = await axios.get(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/orders"
      );
      setOrders(response.data);
      setStatus(status);
    } catch (error) {
      // Handle error if API call fails
      console.error("Error updating order status:", error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="main-body">
          {/* Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-2">
              <div
                className="card"
                style={{
                  border: "1px solid black",
                }}
              >
                <div className="card-body card-bodyProfile">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={`https://avatar.iran.liara.run/username?username=${auth.user?.first_name}+${auth.user?.last_name}&background=random`}
                      alt="Admin"
                      className="rounded-circle"
                      width={80}
                    />
                    <div className="mt-2">
                      <h4>
                        {auth?.user?.first_name + " " + auth?.user?.last_name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div
                  className="sidebar"
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <NavLink to="/dashboard/users">Users</NavLink>
                  <NavLink to="/dashboard/admins">Admins</NavLink>
                  <NavLink to="/dashboard/orders">Orders</NavLink>
                  <NavLink to="/dashboard/product">Product</NavLink>
                  <NavLink to="/dashboard/createCategory">Category</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="card mb-3"
                style={{
                  border: "1px solid black",
                }}
              >
                <div className="card-body card-bodyProfile">
                  <p className="card-heading">All Orders</p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Status</th>
                              <th>Payment Method</th>
                              <th>Total Amount</th>
                              <th>Buyer Name</th>
                              <th>Buyer Phone</th>
                              <th>Buyer Address</th>
                              <th>Buyer Email</th>
                              <th>Order Time</th>
                              <th>Delivery Type</th>
                              <th>Order Items</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order) => (
                              <tr
                                key={order._id}
                                style={{
                                  backgroundColor:
                                    order.status === "Delivered"
                                      ? "lightgreen"
                                      : (order.status === "Shipped" &&
                                          "lightblue") ||
                                        (order.status === "Processing" &&
                                          "lightyellow") ||
                                        (order.status === "Cancelled" &&
                                          "lightcoral") ||
                                        "white",
                                }}
                              >
                                <td>{order._id}</td>
                                <td>
                                  <button
                                    className="m-1 btn-sm w-100"
                                    style={{
                                      background: "transparent",
                                      padding: "1px 5px",
                                      borderRadius: "5px",
                                      borderWidth: "1px",
                                      backgroundColor:
                                        order.status === "Processing"
                                          ? "transparent"
                                          : "yellow",
                                    }}
                                    onClick={() =>
                                      updateOrderStatus(order._id, "Processing")
                                    }
                                  >
                                    Processing
                                  </button>
                                  <button
                                    className="m-1 btn-sm w-100 text-white"
                                    style={{
                                      background: "transparent",
                                      padding: "1px 5px",
                                      borderRadius: "5px",

                                      borderWidth: "1px",
                                      backgroundColor:
                                        order.status === "Shipped"
                                          ? "transparent"
                                          : "blue",
                                    }}
                                    onClick={() =>
                                      updateOrderStatus(order._id, "Shipped")
                                    }
                                  >
                                    Shipped
                                  </button>
                                  <button
                                    className="m-1 btn-sm w-100 text-white"
                                    style={{
                                      background: "transparent",
                                      padding: "1px 5px",
                                      borderRadius: "5px",
                                      borderWidth: "1px",
                                      backgroundColor:
                                        order.status === "Delivered"
                                          ? "transparent"
                                          : "green",
                                    }}
                                    onClick={() =>
                                      updateOrderStatus(order._id, "Delivered")
                                    }
                                  >
                                    Delivered
                                  </button>
                                  <button
                                    className="m-1 btn-sm w-100 text-white"
                                    style={{
                                      background: "transparent",
                                      padding: "1px 5px",
                                      borderRadius: "5px",
                                      borderWidth: "1px",
                                      backgroundColor:
                                        order.status === "Cancelled"
                                          ? "transparent"
                                          : "red",
                                    }}
                                    onClick={() =>
                                      updateOrderStatus(order._id, "Cancelled")
                                    }
                                  >
                                    Cancelled
                                  </button>
                                </td>
                                <td>{order.payment.method}</td>
                                <td>{order.amount}</td>
                                <td>{order.buyerName}</td>
                                <td>{order.buyerPhone}</td>
                                <td>{order.buyerAddress}</td>
                                <td>{order.buyerEmail}</td>
                                <td>{moment(order.createdAt).format("LLL")}</td>
                                <td>{order.deliveryType}</td>
                                <td>
                                  <ul>
                                    {order.products.map((productId) => (
                                      <li key={productId}>{productId}</li>
                                    ))}
                                  </ul>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
