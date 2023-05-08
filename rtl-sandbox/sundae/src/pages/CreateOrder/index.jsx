import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import OrderOptions from "./OrderOptions";
import { ENDPOINTS } from "../../constants/api";

const CreateOrder = () => {
  const [error, setError] = useState(null);

  if (error) {
    return (
      <Container>
        <Row>
          <Alert variant="danger">{`Oops... Something want wrong! ${
            error.message || error
          }`}</Alert>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <OrderOptions onError={setError} optionsType={ENDPOINTS.scoops} />
      <OrderOptions onError={setError} optionsType={ENDPOINTS.toppings} />
      <div>Grand total</div>
      <div>Submit</div>
    </Container>
  );
};

export default CreateOrder;
