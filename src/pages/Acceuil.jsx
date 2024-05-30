import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ImCalculator } from "react-icons/im";
import { FaAlignCenter } from "react-icons/fa";

function Acceuil() {
  return (
    <Container className="home p-5">
      <Row className="d-flex justify-content-center">
        <Col sm={3}>
          <Card
            key={"card"}
            text={"black"}
            style={{
              border: "2px solid var(--blue)", textAlign:'center'
            }}
            className="mb-2 card-custom"
          >
            <Card.Header>
              <ImCalculator />
            </Card.Header>
            <Card.Body>
              <Card.Title>Nombre des patients </Card.Title>
              <Card.Text className="count">55</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={{span:3
          ,offset:1}}>
          <Card
            key={"card"}
            text={"black"}
            style={{
              border: "2px solid var(--blue)", textAlign:'center'
            }}
            className="mb-2 card-custom"
          >
            <Card.Header>
              <ImCalculator />
            </Card.Header>
            <Card.Body>
              <Card.Title>Nombre des rendez-vous </Card.Title>
              <Card.Text className="count">55</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Acceuil;
