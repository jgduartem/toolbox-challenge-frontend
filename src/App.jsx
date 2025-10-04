import React from "react";
import { Container, Navbar, Nav, Table, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import CustomTable from "./components/CustomTable";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Container fluid className="mt-4">
          <NavBar />
          <CustomTable />
        </Container>
      </>
    </Provider>
  );
};

export default App;
