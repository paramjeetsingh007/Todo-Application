import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg rounded-3 shadow-lg"
      style={{
        backgroundColor: "#F28482",
        width: "100%", // Full width navbar
        padding: "10px 20px", // Slight padding for aesthetics
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder text-white" href="#">
          MyTodos
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <Link to="/" className="btn dashboard-btn">
              Go to Dashboard
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
