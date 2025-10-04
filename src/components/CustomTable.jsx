import React from "react";
import { useState } from "react";
import { Table, Row, Col } from "react-bootstrap";
import useFiles from "../hooks/useFiles";
import { useSelector } from "react-redux";

function CustomTable() {
  const param = useSelector((state) => state.search.query);
  const { data, loading, error, getFile } = useFiles("http://localhost:8000/files/data", param);

  return (
    <Row>
      <Col>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((file) => {
                return file.lines.map((line) => {
                  return (
                    <tr>
                      <td>{file.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  );
                });
              })}
              {/* <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>juan@example.com</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>2</td>
                <td>María López</td>
                <td>maria@example.com</td>
                <td>Usuario</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carlos Díaz</td>
                <td>carlos@example.com</td>
                <td>Editor</td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
}

export default CustomTable;
