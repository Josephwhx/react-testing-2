import React, { useState } from 'react'
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

function SummaryForm() {

    const [toCheck, setToCheck] = useState(false);
    
    
    
    const checkboxHandler = (event) => {
        setToCheck(event.target.checked);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
    }

    const popover = (
      <Popover id='popover-basic'>
        <Popover.Body>
          No ice cream will actually be delivered
        </Popover.Body>
      </Popover>
    );

    const checkboxLabel = (
      <OverlayTrigger placement="right" overlay={popover}>
        <span>
          I agree to <span style={{color: 'blue'}}> Terms and Conditions</span>
        </span>
      </OverlayTrigger>
      
    );
    
  return (
      <Form>
        <Form.Group controlId = "terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={toCheck}
            onChange={checkboxHandler}
            label={checkboxLabel}
          />

        </Form.Group>
        <Button variant="primary" type="submit" disabled={!toCheck}>
          Confirm order
        </Button>
      </Form>
  );
}

export default SummaryForm