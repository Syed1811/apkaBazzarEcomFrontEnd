import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Modal } from "antd";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { MdAdd } from "react-icons/md";

import Messages from "./Messages";

const UsersDashboard = () => {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [sendMail, setSendMail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const handleAddAdmin = async (mail) => {
    try {
      console.log("Mail before removing admin:", mail);

      // Make a request to your backend API to remove the admin
      await axios.put(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/giveAdminRole",
        {
          email: mail,
        }
      );
      const response = await axios.get(
        "https://e-comm-2uyq.onrender.com/api/v1/auth/all-users"
      );

      // Update the 'admins' state with the fetched data
      setUsers(response.data.users);

      console.log("Admin Added successfully");
    } catch (error) {
      console.error("Error adding admin:", error.message);
    }
  };

  const confirmBox = (mail) => {
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
            <p className="custom-uiP">You want to delete this file?</p>
            <button onClick={onClose} className="custom-uiButton">
              No
            </button>
            <button
              className="custom-uiButton"
              onClick={() => {
                handleAddAdmin(mail);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a request to your backend API to get all users
        const response = await axios.get(
          "https://e-comm-2uyq.onrender.com/api/v1/auth/all-users"
        );

        // Update the state with the fetched user data
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

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
                  <p className="card-heading">Users</p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-controlCategory"
                          placeholder="Search users"
                          value={searchQuery}
                          onChange={handleSearchInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="table-responsive shadow-z-1">
                        <table
                          id="table"
                          className="table table-hover table-mc-light-blue"
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Address</th>
                              <th>Email Verified</th>
                              <th>Message</th>
                              <th>Admin</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredUsers.map((user, index) => (
                              <tr key={user._id}>
                                <td data-title="ID">{index + 1}</td>
                                <td data-title="First Name">
                                  {user.first_name}
                                </td>
                                <td data-title="Last Name">{user.last_name}</td>
                                <td data-title="Email">{user.email}</td>
                                <td data-title="Phone Number">
                                  {user.countrycode} - {user.phoneNumber}
                                </td>
                                <td data-title="Address">
                                  {user.address}, {user.pincode}, {user.city}
                                </td>
                                <td data-title="isVerified">
                                  {user.verifiedEmail === true ? "Yes" : "No"}
                                </td>
                                <td data-title="action">
                                  <button
                                    onClick={() => {
                                      setVisible(true);
                                      setSendMail(user.email);
                                    }}
                                    className="btn btn-primary"
                                  >
                                    <i className="fa fa-envelope" />
                                  </button>
                                </td>
                                <td data-title="action">
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => confirmBox(user.email)}
                                  >
                                    <MdAdd
                                      style={{
                                        fontSize: "20px",
                                      }}
                                    />
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

export default UsersDashboard;
