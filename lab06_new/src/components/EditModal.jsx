// EditModal.jsx
import React, { useState, useEffect } from 'react';
import '../css/EditModal.css';

const API_URL = 'https://67c824890acf98d0708518a5.mockapi.io/users';

export default function EditModal({ isOpen, onClose, userId }) {
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: 'New',
  });

  // Lấy dữ liệu người dùng nếu đang sửa
  useEffect(() => {
    if (isOpen && userId) {
      fetch(`${API_URL}/${userId}`)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          setFormData(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    } else {
      // Nếu đang thêm mới, reset form
      setFormData({
        customerName: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New',
      });
    }
  }, [isOpen, userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        userId ? `${API_URL}/${userId}` : API_URL,
        {
          method: userId ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save user');
      }

      console.log(userId ? 'User updated successfully!' : 'User added successfully!');
      onClose(); // Đóng modal sau khi xử lý
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{userId ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Customer Name:
            <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
          </label>
          <label>
            Company:
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
          </label>
          <label>
            Order Value:
            <input type="number" name="orderValue" value={formData.orderValue} onChange={handleChange} />
          </label>
          <label>
            Order Date:
            <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} />
          </label>
          <label>
            Status:
            <select name="status" value={formData.status} onChange={handleChange}>
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
