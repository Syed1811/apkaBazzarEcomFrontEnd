import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/auth";
import CategoryForm from "../../component/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [auth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://e-comm-2uyq.onrender.com/api/v1/category/create-category",
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`, {
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
        getAllCategory();
      } else {
        toast.error(data.message, {
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
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong in input form", {
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

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://e-comm-2uyq.onrender.com/api/v1/category/get-category"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory", {
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

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://e-comm-2uyq.onrender.com/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`, {
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
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message, {
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
    } catch (error) {
      toast.error("Something wwent wrong", {
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
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `https://e-comm-2uyq.onrender.com/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success("Category deleted", {
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

        getAllCategory();
      } else {
        toast.error(data.message, {
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
    } catch (error) {
      toast.error("Something wwent wrong", {
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
                  <p className="card-heading">Create Category</p>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-9 col-md-8 text-secondary">
                        <input
                          type="text"
                          value={name}
                          className="form-controlCategory"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-3 col-md-4 mt-md-0 text-center">
                        <button
                          className="btn btn-primary btn-jelly w-100"
                          type="submit"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <p className="card-heading">Categories</p>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="table-responsive shadow-z-1">
                        <table
                          id="table"
                          className="table table-hover table-mc-light-blue"
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Update</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {categories?.map((c) => (
                              <tr key={c._id}>
                                <td data-title="ID">
                                  {categories.indexOf(c) + 1}
                                </td>
                                <td data-title="Name" className="nameColumn">
                                  {c.name}
                                </td>
                                <td data-title="Edit">
                                  <button
                                    className="btn btn-primary btn-jelly"
                                    onClick={() => {
                                      setVisible(true);
                                      setUpdatedName(c.name);
                                      setSelected(c);
                                    }}
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td data-title="Delete">
                                  <button
                                    className="btn btn-danger btn-jelly ms-1"
                                    onClick={() => {
                                      handleDelete(c._id);
                                    }}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <Modal
                        onCancel={() => setVisible(false)}
                        footer={null}
                        open={visible}
                      >
                        <CategoryForm
                          value={updatedName}
                          setValue={setUpdatedName}
                          handleSubmit={handleUpdate}
                        />
                      </Modal>
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

export default CreateCategory;
