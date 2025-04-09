// EditModal.jsx
import React from 'react';
import '../css/EditModal.css'; // Tùy chỉnh theo style của bạn


export default function EditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add User</h2>
        <form>
          <label>
            Customer Name:
            <input type="text" name="customerName" />
          </label>
          <label>
            Company:
            <input type="text" name="company" />
          </label>
          <label>
            Order Value:
            <input type="number" name="orderValue" />
          </label>
          <label>
            Order Date:
            <input type="date" name="orderDate" />
          </label>
          <label>
            Status:
            <select name="status">
              <option value="New">New</option>
              <option value="Pending">In-progress</option>
              <option value="Done">Completed</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
