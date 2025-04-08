import React from "react";
import "../css/Overview.css";
import { Col, Row } from "react-bootstrap";
import { GoTriangleUp } from "react-icons/go";
export default function Overview() {
  return (
    <div className="container-overview">
      <div className="logo-overview">
        <img src="../../img/dashboard.png" alt="" />
        Overview
      </div>
      <div className="content-top">
        <div className="card-content" style={{ backgroundColor: "#FEEFF4" }}>
          <div className="card-wrapper">
            <div className="card-left">
              <p>Turnover</p>
              <h2>$92,405</h2>
            </div>
            <div className="card-right">
              <img src="../../img/Button 1509.png" alt="" />
            </div>
          </div>
          <div className="card-bottom">
            <p className="precent">
              <GoTriangleUp />
              5.29%
            </p>
            <p>period of change</p>
          </div>
        </div>
        <div className="card-content" style={{ backgroundColor: "#F0F7FD" }}>
          <div className="card-wrapper">
            <div className="card-left">
              <p>Profit</p>
              <h2>$32,218</h2>
            </div>
            <div className="card-right">
              <img src="../../img/Button 1529.png" alt="" />
            </div>
          </div>
          <div className="card-bottom">
            <p className="precent">
              <GoTriangleUp />
              5.29%
            </p>
            <p>period of change</p>
          </div>
        </div>
        <div className="card-content" style={{ backgroundColor: "#F0F7FD" }}>
          <div className="card-wrapper">
            <div className="card-left">
              <p>New customer</p>
              <h2>298</h2>
            </div>
            <div className="card-right">
              <img src="../../img/Button 1530.png" alt="" />
            </div>
          </div>
          <div className="card-bottom">
            <p className="precent">
              <GoTriangleUp />
              5.29%
            </p>
            <p>period of change</p>
          </div>
        </div>
      </div>
    </div>
  );
}
