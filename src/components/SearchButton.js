import React from "react";
import Button from "react-bootstrap/Button";

const SearchButton = ({ children }) => (
  <Button variant="info" type="submit" size="lg">
    {children}
  </Button>
);

export default SearchButton;
