import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
        Guest Onboarding System
      </a>
      <div className="ml-auto">
        <a className="btn btn-outline-light" href="/">
          Logout
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
