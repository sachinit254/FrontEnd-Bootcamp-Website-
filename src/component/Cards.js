import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const Cards = () => {
  return (
    <Container className="d-md-flex justify-content-center align-items-center my-5">
      <Row text="center" g={4}>
        <Col md className="mb-3">
          <Card  className="p-0" variant="dark" bg="dark" text="light">
            <Card.Body className="text-center">
              <h1>
                <BsLaptop />
              </h1>
              <Card.Title>Virtual</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                itaque numquam aliquam similique molestiae deserunt!
              </Card.Text>
              <Card.Link className="btn btn-primary" href="#">
                Read More
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md className="mb-3">
          <Card  variant="dark" bg="secondary" text="light">
            <Card.Body className="text-center">
              <h1>
                <AiOutlineContacts />
              </h1>
              <Card.Title>Hybrid</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                itaque numquam aliquam similique molestiae deserunt!
              </Card.Text>
              <Card.Link className="btn btn-dark" href="#">
                Read More
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md className="mb-3">
          <Card  variant="dark" bg="dark" text="light">
            <Card.Body className="text-center">
              <h1>
                <BsPerson />
              </h1>
              <Card.Title>Person</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                itaque numquam aliquam similique molestiae deserunt!
              </Card.Text>
              <Card.Link className="btn btn-primary" href="#">
                Read More
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
