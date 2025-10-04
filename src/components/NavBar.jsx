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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">ToolBox Frontend Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup className="pd-3">
            <Form.Control placeholder="Search by file name" aria-label="Filename" onChange={handleChange} />
          </InputGroup>
          {/* <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Usuarios</Nav.Link>
            <Nav.Link href="#">Configuración</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
