import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import { IoIosAdd } from "react-icons/io";
import axios from "axios";

const Product = () => {
  const [auth] = useAuth();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://e-comm-2uyq.onrender.com/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <div className="sidebar">
                  <NavLink to="/dashboard/users">Users</NavLink>
                  <NavLink to="/dashboard/admins">Admins</NavLink>
                  <NavLink to="/dashboard/orders">Orders</NavLink>
                  <NavLink to="/dashboard/product">Product</NavLink>
                  <NavLink to="/dashboard/createCategory">Category</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body card-bodyProfile">
                  <div className="row mb-2">
                    <div className="col-sm-9">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-controlCategory"
                          placeholder="Search admins"
                          value={searchQuery}
                          onChange={handleSearchInputChange}
                        />
                      </div>
                    </div>
                    <div className="text-end col-sm-3">
                      <NavLink
                        to="/dashboard/createProduct"
                        className="btn btn-create btn-jelly"
                      >
                        <IoIosAdd />
                        Create
                      </NavLink>
                    </div>
                  </div>
                  <h1 className="text-center">All Products List</h1>
                  <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                    {filteredProducts.map((p) => (
                      <div
                        key={p._id}
                        className="col mb-4"
                        style={{
                          border: "1px solid black",
                        }}
                      >
                        <NavLink className="product-link text-decoration-none">
                          <div className="card h-100">
                            <img
                              src={`https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top"
                              alt={p.name}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{p.name}</h5>
                              <p className="card-text">{p.description}</p>
                              <p
                                className={`card-text ${
                                  p.sales ? "text-decoration-line-through" : ""
                                }`}
                              >
                                Price: {p.price}
                              </p>
                              {p.sales && (
                                <p className="card-text">
                                  Sales: {p.salePrice}
                                </p>
                              )}
                              <p className="card-text">
                                Quantity: {p.quantity}
                              </p>
                              <p className="card-text">color: {p.colour}</p>
                            </div>
                            <NavLink
                              to={`/dashboard/updateProduct/${p.slug}`}
                              className="btn btn-primary mb-2"
                            >
                              Update
                            </NavLink>
                          </div>
                        </NavLink>
                      </div>
                    ))}
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

export default Product;
