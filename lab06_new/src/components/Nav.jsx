import React from 'react';
import "../css/Nav.css";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="container-nav">
      <img src="/img/Image 1858.png" alt="Logo" className="logo" />

      <ul className="menu">
        <li>
          <Link to="/">
            <img src="/img/dashboard.png" alt="Dashboard" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <img src="/img/Folder.png" alt="Projects" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <img src="/img/Groups.png" alt="Teams" />
            <span>Teams</span>
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <img src="/img/Pie chart.png" alt="Analytics" />
            <span>Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <img src="/img/Chat.png" alt="Messages" />
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link to="/integrations">
            <img src="/img/Code.png" alt="Integrations" />
            <span>Integrations</span>
          </Link>
        </li>
      </ul>

      <div className="ad">
        <img src="/img/Group.png" alt="Promo" />
        <h3>V2 is available</h3>
        <button>Try now</button>
      </div>
    </div>
  );
}
