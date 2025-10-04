import React, { useCallback } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";
import debounce from "lodash/debounce";

function NavBar() {
  const dispatch = useDispatch();
  const debouncedDispatch = useCallback(
    debounce((value) => {
      dispatch(setSearchQuery(value));
    }, 500),
    [dispatch]
  );

  const handleChange = (e) => {
    debouncedDispatch(e.target.value);
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={"https://files.toolboxtve.com/wp-content/uploads/2018/04/15144954/logo-stycky.png"}
            width="230"
            height="48"
            className="d-inline-block align-top"
            alt="Toolbox Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup className="pd-3">
            <Form.Control placeholder="Search by file name" aria-label="Filename" onChange={handleChange} />
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
