import React from "react";
import fundamentals from "../img/fundamentals.svg";
import react from '../img/react.svg'
import { Container, Row, Col } from "react-bootstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const Learn = () => {
  return (
    <div className="my-5">
      <Container className="conatiner-md">
        <Row className="align-items-center p-5 mb-5 g-5">
          <Col sm>
            <img className="img-fluid" src={fundamentals} alt="fundamentals" />
          </Col>
          <Col sm>
            <h3>Learn The Fundamentals</h3>
            <p lead className="lh-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              ducimus ex id maiores, nesciunt dolorum.
            </p>
            <p className="lh-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              quaerat. Ducimus rerum consequuntur excepturi, modi optio impedit
              reprehenderit dolores iste laborum officia minima placeat
              necessitatibus suscipit autem ratione perspiciatis tempore.
            </p>
            <a href="learn" className="btn btn-dark  text-decoration-none text-white">
              <ChevronRightIcon />
              Read More
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-white">
        <Container className="conatiner-sm">
          <Row className="align-items-center p-5 g-5">
            <Col sm>
              <h3>Learn React</h3>
              <p lead class="lh-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ducimus ex id maiores, nesciunt dolorum.
              </p>
              <p class="lh-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                quaerat. Ducimus rerum consequuntur excepturi, modi optio
                impedit reprehenderit dolores iste laborum officia minima
                placeat necessitatibus suscipit autem ratione perspiciatis
                tempore.
              </p>
              <a href="learn" className="btn  btn-light text-decoration-none text-dark">
                <ChevronRightIcon />
                Read More
              </a>
            </Col>
            <Col sm>
              <img
                className="img-fluid"
                src={react}
                alt="fundamentals"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Learn;
