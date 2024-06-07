import React from "react";
import { Button } from "antd";
import axios from "axios";

const Action = ({ mail }) => {
  const handleRemoveAdmin = async () => {
    try {
      // Make a request to your backend API to remove the admin
      await axios.delete(
        `https://e-comm-2uyq.onrender.com/admin/removeAdminByEmail/${mail}`
      );
    } catch (error) {
      console.error("Error removing admin:", error.message);
    }
  };

  const confirmBox = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                this.handleClickDelete();
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

  return (
    <>
      <p>Are you sure you want to remove the admin with email: {mail}?</p>
      <Button key="remove" type="primary" onClick={confirmBox}>
        Remove Admin
      </Button>
    </>
  );
};

export default Action;
