import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="Header jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
