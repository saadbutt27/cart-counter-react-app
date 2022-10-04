// import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    console.log('navBar - Rendered');
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#index.html">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//   }
// }

export default NavBar;
