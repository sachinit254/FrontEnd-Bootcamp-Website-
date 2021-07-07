import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Instructors = () => {
  return (
    <Container className="p-5 bg-primary text-white" fluid>
      <Container className="text-center">
        <h2>Our Instructors</h2>
        <p className="lead">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>
        <Row>   
          <Col md className="bg-white py-3 text-dark m-2">
            <Image
              src="https://randomuser.me/api/portraits/men/11.jpg"
              roundedCircle
              alt=""
            />
            <h4>John Doe</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatum nam ullam, deserunt dolorem illo.
            </p>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
          </Col>
          <Col md className="bg-white py-3 text-dark m-2 rounded">
            <Image
              src="https://randomuser.me/api/portraits/men/15.jpg"
              roundedCircle
              alt=""
            />
            <h4>Mark Scott</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatum nam ullam, deserunt dolorem illo.
            </p>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
          </Col>
          <Col md className="bg-white py-3 text-dark m-2 rounded">
            <Image
              src="https://randomuser.me/api/portraits/men/36.jpg"
              roundedCircle
              alt=""
            />
            <h4>Adrian Twag</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatum nam ullam, deserunt dolorem illo.
            </p>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
          </Col>
          <Col md className="bg-white py-3 text-dark m-2 rounded">
            <Image
              src="https://randomuser.me/api/portraits/men/31.jpg"
              roundedCircle
              alt=""
            />
            <h4>Florin Pop</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatum nam ullam, deserunt dolorem illo.
            </p>
            <InstagramIcon />
            <FacebookIcon />
            <GitHubIcon />
            <LinkedInIcon />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Instructors;
