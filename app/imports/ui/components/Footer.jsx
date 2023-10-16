import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const FooterMenu = () => (
  <Container className="footer">
    <Container>
      <Row>
        <Col>
          <h5>NAVIGATION</h5>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          <h5>MAIN MENU</h5>
          <hr />
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
        </Col>
        <Col>
          <h5>CONNECT</h5>
          <hr />
          <div>Sign up for the latest updates</div>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter Email Address" />
            <Button variant="dark" className="mt-2">Join</Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default FooterMenu;
