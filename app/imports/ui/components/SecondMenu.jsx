import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';

const SecondMenu = () => (
  <Container className="row justify-content-center pt-4">
    <div className="col-1">
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle className="custom-dropdown-toggle">
          <strong>MEN</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          {/* Dropdown content for MEN */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-1">
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle className="custom-dropdown-toggle">
          <strong>WOMEN</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          {/* Dropdown content for WOMEN */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-1">
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle className="custom-dropdown-toggle">
          <strong>KIDS</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          {/* Dropdown content for KIDS */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="col-1 mt-2">
      <strong>SEARCH</strong>
    </div>
  </Container>
);

export default SecondMenu;
