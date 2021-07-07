import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
const NewsLetter = () => {
  return (
    <div className="bg-primary text-white">
      <Container className="py-4">
        <Row>
          <Col className="d-flex align-items-center" sm>
            <h4 className="form-label">Sign Up for Newsletter</h4>
          </Col>
          <Col sm>
            <div className="input-group news-input">
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
              />
              <Button variant="dark">Submit</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLetter;
