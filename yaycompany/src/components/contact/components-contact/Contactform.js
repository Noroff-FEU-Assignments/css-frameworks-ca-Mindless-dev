import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Contactform() {
  return (
    <>
      <h1>Submit your details</h1>
      <Form className="contact-form">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Text" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Website</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>Https://</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inlineFormInputGroup" />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Allow us to sell your personal details to whomever we want"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contactform;
