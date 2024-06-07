import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import Messages from "./Messages";
import { Modal } from "antd";

const AdminsDashboard = () => {
  const [auth] = useAuth();
  const [admins, setAdmins] = useState([]);
  const [visible, setVisible] = useState(false);
  const [sendMail, setSendMail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        // Make a request to your backend API to get all admins
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/auth/getAllAdmins"
        );

        // Update the state with the fetched admins data
        setAdmins(response.data.users);
      } catch (error) {
        console.error("Error fetching admins:", error.message);
      }
    };

    fetchAdmins();
  }, []);

  const handleRemoveAdmin = async (email) => {
    try {
      // Make a request to your backend API to remove the admin
      await axios.put(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/removeFromAdmin",
        {
          email: email,
        }
      );
      setAdmins((prevAdmins) =>
        prevAdmins.filter((admin) => admin.email !== email)
      );
      console.log("Admin removed successfully");
    } catch (error) {
      console.error("Error removing admin:", error.message);
    }
  };

  const confirmBox = (email) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1
              style={{
                color: "red",
              }}
            >
              Are you sure?
            </h1>
            <p className="custom-uiP">You want to remove this admin?</p>
            <button onClick={onClose} className="custom-uiButton">
              No
            </button>
            <button
              className="custom-uiButton"
              onClick={() => {
                handleRemoveAdmin(email);
                onClose();
              }}
            >
              Yes, Remove it!
            </button>
          </div>
        );
      },
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAdmins = admins.filter((admin) => {
    const fullName = `${admin.first_name} ${admin.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

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
                  <p className="card-heading">Admins</p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
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
                    <div className="col-sm-12">
                      <div className="table-responsive shadow-z-1">
                        <table className="table table-hover table-mc-light-blue">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Address</th>
                              <th>Email Verified</th>
                              <th>Remove Admin</th>
                              <th>Messages</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredAdmins.map((admin, index) => (
                              <tr key={admin._id}>
                                <td>{index + 1}</td>
                                <td>{admin.first_name}</td>
                                <td>{admin.last_name}</td>
                                <td>{admin.email}</td>
                                <td>
                                  {admin.countrycode} - {admin.phoneNumber}
                                </td>
                                <td>
                                  {admin.address}, {admin.pincode}, {admin.city}
                                </td>
                                <td>
                                  {admin.verifiedEmail === true ? "Yes" : "No"}
                                </td>
                                <td>
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => confirmBox(admin.email)}
                                  >
                                    <IoPersonRemoveOutline />
                                  </button>
                                </td>
                                <td>
                                  <button
                                    onClick={() => {
                                      setVisible(true);
                                      setSendMail(admin.email);
                                    }}
                                    className="btn btn-primary"
                                  >
                                    <i className="fa fa-envelope" />
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
                        <Messages mail={sendMail} />
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

export default AdminsDashboard;
