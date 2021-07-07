import React from "react";
import { Container, Button, Card, Accordion } from "react-bootstrap";
const Questions = () => {
  return (
    <Container className="my-5" >
      <h2>Frequently Asked Questions</h2>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} className="text-decoration-none" variant="link" eventKey="0">
              Where are you exactly located?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos repellat ut aperiam facilis consectetur sapiente
              perferendis ipsa. Voluptate, sint doloremque deleniti eveniet
              reprehenderit tenetur veniam atque quam, reiciendis alias minus
              quod aliquid porro numquam maxime eaque nobis officia dolorum?
              Eos, quo. Expedita voluptatibus esse nihil adipisci temporibus.
              Esse, omnis expedita.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="text-decoration-none" as={Button} variant="link" eventKey="1">
              How much does it cost to attend?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos repellat ut aperiam facilis consectetur sapiente
              perferendis ipsa. Voluptate, sint doloremque deleniti eveniet
              reprehenderit tenetur veniam atque quam, reiciendis alias minus
              quod aliquid porro numquam maxime eaque nobis officia dolorum?
              Eos, quo. Expedita voluptatibus esse nihil adipisci temporibus.
              Esse, omnis expedita.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="text-decoration-none" as={Button} variant="link" eventKey="2">
              What do i need to Know?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos repellat ut aperiam facilis consectetur sapiente
              perferendis ipsa. Voluptate, sint doloremque deleniti eveniet
              reprehenderit tenetur veniam atque quam, reiciendis alias minus
              quod aliquid porro numquam maxime eaque nobis officia dolorum?
              Eos, quo. Expedita voluptatibus esse nihil adipisci temporibus.
              Esse, omnis expedita.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="text-decoration-none" as={Button} variant="link" eventKey="3">
              How do i Sign Up?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos repellat ut aperiam facilis consectetur sapiente
              perferendis ipsa. Voluptate, sint doloremque deleniti eveniet
              reprehenderit tenetur veniam atque quam, reiciendis alias minus
              quod aliquid porro numquam maxime eaque nobis officia dolorum?
              Eos, quo. Expedita voluptatibus esse nihil adipisci temporibus.
              Esse, omnis expedita.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="text-decoration-none" as={Button} variant="link" eventKey="4">
              Do you help me find a job?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos repellat ut aperiam facilis consectetur sapiente
              perferendis ipsa. Voluptate, sint doloremque deleniti eveniet
              reprehenderit tenetur veniam atque quam, reiciendis alias minus
              quod aliquid porro numquam maxime eaque nobis officia dolorum?
              Eos, quo. Expedita voluptatibus esse nihil adipisci temporibus.
              Esse, omnis expedita.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Questions;
