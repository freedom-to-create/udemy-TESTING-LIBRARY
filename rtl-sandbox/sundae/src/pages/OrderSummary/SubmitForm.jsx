import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CheckboxLabel = () => {
  return (
    <Form.Label>
      I agree to{" "}
      <OverlayTrigger
        placement='auto'
        overlay={(props) => (
          <Tooltip id="termsAndConditionsPopover" {...props}>
            No ice cream will actually be delivered
          </Tooltip>
        )}
      >
        <span style={{ color: "blue" }}>
          Terms and Conditions
        </span>
      </OverlayTrigger>
    </Form.Label>
  );
};

const SubmitForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState(false);
  const handleTermsAndConditionsChange = (event) => setTermsAndConditionsChecked(event.target.checked);
  return (
    <Form>
      <Form.Group controlId="TOC_checkbox" className="mb-3">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionsChecked}
          onChange={handleTermsAndConditionsChange}
          label={<CheckboxLabel />}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!termsAndConditionsChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SubmitForm;
