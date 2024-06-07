import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams, NavLink } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");
  const [colour, setcolour] = useState("");
  const [salePrice, setSalePrice] = useState(0);
  const [sales, setSales] = useState(false);
  const [brand, setBrand] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://e-comm-2uyq.onrender.com/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setBrand(data.product.brand);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setSalePrice(
        data.product.salePrice === null ? 0 : data.product.salePrice
      );
      setSales(data.product.sales);
      setcolour(data.product.colour);
      setQuantity(data.product.quantity);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://e-comm-2uyq.onrender.com/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      productData.append("brand", brand);
      productData.append("sales", sales);
      productData.append("colour", colour);
      productData.append("salePrice", salePrice);
      const { data } = axios.put(
        `https://e-comm-2uyq.onrender.com/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/product");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (answer === "") return;
      await axios.delete(
        `https://e-comm-2uyq.onrender.com/api/v1/product//productDelete/${id}`
      );
      toast.success("Product Deleted Succfully");
      navigate("/dashboard/product");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="container-fluid ps-4 pe-4 pt-2 pb-2">
      <div className="row productUpdateCard">
        <NavLink to="/dashboard/product">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back to
          Product
        </NavLink>
        <div
          className="col-md-9"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            className="mt-2"
            style={{
              colour: "#204969",
              textAlign: "center",
            }}
          >
            Update Product
          </h1>
          <div
            className="m-1 w-100"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Select
              bordered={false}
              placeholder="Select a category"
              size="large"
              showSearch
              className="mb-3"
              onChange={(value) => {
                setCategory(value);
              }}
              value={category}
              style={{
                border: "1px solid #b7b7b7",
                borderRadius: "4px",
              }}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>
            <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <div className="mb-3">
              {photo ? (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={`/api/v1/product/product-photo/${id}`}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                placeholder="Name"
                className="form-controlCategory"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={brand}
                placeholder="Brand"
                className="form-controlCategory"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                value={description}
                placeholder="Description"
                className="form-controlCategory"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={colour}
                placeholder="Colour"
                className="form-controlCategory"
                onChange={(e) => setcolour(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                value={price}
                placeholder="Price"
                className="form-controlCategory"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <Select
              bordered={false}
              placeholder="Put On Sale"
              size="large"
              showSearch
              value={sales === "true" ? "Yes" : "No"}
              className="form-controlCategory mb-3"
              onChange={(value) => {
                setSales(value);
              }}
              style={{
                border: "1px solid #b7b7b7",
                borderRadius: "4px",
              }}
            >
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>

            {sales === "true" ? (
              <div className="mb-3">
                <input
                  type="number"
                  value={salePrice}
                  placeholder="Sale Price"
                  className="form-controlCategory"
                  onChange={(e) => setSalePrice(e.target.value)}
                />
              </div>
            ) : null}
            <div className="mb-3">
              <input
                type="number"
                value={quantity}
                placeholder="write a quantity"
                className="form-controlCategory"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button
                className="btn btn-primary btn-jelly"
                onClick={handleUpdate}
              >
                UPDATE PRODUCT
              </button>
              <button
                className="btn btn-danger ms-2 btn-jelly"
                onClick={handleDelete}
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
