import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState("");
  const [colour, setcolour] = useState("");
  const [brand, setBrand] = useState("");
  const [sales, setSales] = useState(false);
  const [salePrice, setSalePrice] = useState("");

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
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("colour", colour);
      productData.append("category", category);
      productData.append("brand", brand);
      productData.append("sales", sales);
      productData.append("salePrice", salePrice);
      const { data } = axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/product");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
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
            className="text-center mt-2"
            style={{
              colour: "#204969",
            }}
          >
            Create Product
          </h1>
          <div
            className="m-1 w-100"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Select
              placeholder="Select a Category"
              size="large"
              showSearch={true}
              className="mb-3"
              onChange={(value) => {
                setCategory(value);
              }}
              style={{
                border: "0px",
              }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
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
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
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
                onChange={(e) => setName(e.target.value)}
                className="form-controlCategory"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={brand}
                placeholder="Brand"
                onChange={(e) => setBrand(e.target.value)}
                className="form-controlCategory"
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
                onChange={(e) => setcolour(e.target.value)}
                className="form-controlCategory"
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                value={price}
                placeholder="MRP Price"
                className="form-controlCategory"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <Select
              bordered={false}
              placeholder="Put On Sale"
              size="large"
              showSearch
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
                placeholder="Quantity"
                className="form-controlCategory"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex justify-content-center btn-jelly">
              <button className="btn btn-primary" onClick={handleCreate}>
                CREATE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
