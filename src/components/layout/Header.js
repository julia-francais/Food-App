import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Food App</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
