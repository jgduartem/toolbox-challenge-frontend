import React from "react";
import { Table, Row, Col, Placeholder, Alert } from "react-bootstrap";
import useFiles from "../hooks/useFiles";
import { useSelector } from "react-redux";

function CustomTable() {
  const param = useSelector((state) => state.search.query);
  const { data, loading, error } = useFiles(
    "http://localhost:8000/files/data",
    param
  );

  if (data?.length === 0 && !loading) {
    return <Alert key={"primary"} variant={"primary"}>No data</Alert>
  }

  if (error) return <p>Error: {error}</p>;


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
              {loading
                ? Array.from({ length: 5 }).map((_, idx) => (
                    <tr key={idx}>
                      <td>
                        <Placeholder as="p" animation="glow">
                          <Placeholder xs={8} />
                        </Placeholder>
                      </td>
                      <td>
                        <Placeholder as="p" animation="glow">
                          <Placeholder xs={10} />
                        </Placeholder>
                      </td>
                      <td>
                        <Placeholder as="p" animation="glow">
                          <Placeholder xs={4} />
                        </Placeholder>
                      </td>
                      <td>
                        <Placeholder as="p" animation="glow">
                          <Placeholder xs={6} />
                        </Placeholder>
                      </td>
                    </tr>
                  ))
                : data?.map((file, fileIdx) =>
                    file.lines.map((line, lineIdx) => (
                      <tr key={`${fileIdx}-${lineIdx}`}>
                        <td>{file.file}</td>
                        <td>{line.text}</td>
                        <td>{line.number}</td>
                        <td>{line.hex}</td>
                      </tr>
                    ))
                  )}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
}

export default CustomTable;
