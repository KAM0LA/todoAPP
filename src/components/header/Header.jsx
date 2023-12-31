import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <InputGroup className="my-3">
        <Form.Control placeholder="Searching contact" />
        <InputGroup.Text id="basic-addon2">Contact sections</InputGroup.Text>
      </InputGroup>
    );
  }
}

export default Header;
