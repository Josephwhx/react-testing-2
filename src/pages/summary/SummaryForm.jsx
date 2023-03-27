import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

function SummaryForm() {

    const [toCheck, setToCheck] = useState(false);
    
    const checkboxLabel = (
      <span>
        I agree to <span style={{color: 'blue'}}> Terms and Conditions</span>
      </span>
    );
    
    const checkboxHandler = (event) => {
        setToCheck(event.target.checked);
    }
    
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