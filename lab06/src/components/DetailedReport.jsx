import React from "react";
import "../css/DetailedReport.css";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import orders from "../data/orders";
import { GoPencil } from "react-icons/go";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
const DetailedReport = () => {
  const getStatusBadge = (status) => {
    let className = "status-badge ";
    switch (status) {
      case "New":
        className += "bg-blue-100 text-blue-600";
        break;
      case "In-progress":
        className += "bg-yellow-100 text-yellow-700";
        break;
      case "Completed":
        className += "bg-green-100 text-green-700";
        break;
      default:
        className += "bg-gray-100 text-gray-600";
    }

    return <span className={className}>{status}</span>;
  };

  return (
    <div className="container-detailed-report">
      <div className="header-detailed-report">
        <div className="logo-detailed-report">
          <img src="../../img/File text 1.png" alt="" />
          Detailed Report
        </div>
        <div className="button-ex-im">
          <button className="button-import">
            <CiImport /> Import
          </button>
          <button className="button-export">
            <CiExport /> Export
          </button>
        </div>
      </div>
      <div className="main-detailed-report">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>CUSTOMER NAME</th>
              <th>COMPANY</th>
              <th>ORDER VALUE</th>
              <th>ORDER DATE</th>
              <th style={{ textAlign: "center" }}>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img
                    src="../../img/avatar-cus.jpg"
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  {order.customerName}
                </td>
                <td>{order.company}</td>
                <td>{order.orderValue}</td>
                <td>{order.orderDate}</td>
                <td style={{ textAlign: "center" }}>
                  {getStatusBadge(order.status)}
                </td>
                <td>
                  <button>
                    <GoPencil />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer-detailed-report">
        <p>63 results</p>
        <div className="number-page-navigation">
          <PiLessThan />
          <button>
            <span>1</span>
          </button>
          <button>
            <span>2</span>
          </button>
          <button>
            <span>3</span>
          </button>
          <button>
            <span>4</span>
          </button>
          <button>
            <span>...</span>
          </button>
          <button>
            <span>10</span>
          </button>
          <button>
            <span>11</span>
          </button>
          <PiGreaterThan />
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
