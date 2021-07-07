import React from 'react'
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import coder from "../img/coder.svg";

const Banner = () => {
    return (
      <div>
        <section>
          <div className="bg-dark text-white p-5 mt-2">
            <Container>
              <Row className="d-flex flex-row align-items-center">
                <Col sm={6}>
                  <h2 className="mb-4">
                    Become a <span className="text-warning">Web Developer</span>
                  </h2>
                  <p className="mb-4">
                    We focus on teaching our students the fundamentals of the
                    latest and greatest technologies to prepare them for their
                    first dev role
                  </p>
                  <Button>Start The Enrollment</Button>
                </Col>
                <Col className="d-none d-sm-block" sm={6}>
                  <Image className="img-fluid" src={coder} />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    );
}

export default Banner

