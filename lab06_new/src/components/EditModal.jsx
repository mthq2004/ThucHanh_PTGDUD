import React, { useState, useEffect } from "react";
import "../css/EditModal.css";

const API_URL = "https://67c824890acf98d0708518a5.mockapi.io/users";

export default function EditModal({ isOpen, onClose, user, mode, onSuccess }) {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });

  useEffect(() => {
    if (isOpen && mode === "edit" && user) {
      setFormData(user);
    } else {
      setFormData({
        customerName: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "New",
      });
    }
  }, [isOpen, user, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        user?.id ? `${API_URL}/${user.id}` : API_URL,
        {
          method: user?.id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save user");
      }

      const message = user?.id
        ? "Cập nhật người dùng thành công!"
        : "Thêm người dùng thành công!";
      alert(message); // 🔥 Hiển thị dialog thông báo

      onClose();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Đã xảy ra lỗi khi lưu người dùng.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ backgroundColor: "white" }}>
        <h2>{mode === "edit" ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Order Value:
            <input
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
            />
          </label>
          <label>
            Order Date:
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
