import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function buttongroup() {
  return (
    <>
      <ButtonGroup className="mb-2">
        <Button className="active" variant="secondary">
          1
        </Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </ButtonGroup>
    </>
  );
}

export default buttongroup;
