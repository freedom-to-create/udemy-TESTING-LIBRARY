import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { BASE_URL, ENDPOINTS } from "../../constants/api";
import ScoopOptionItem from "./ScoopOptionItem";
import ToppingOptionItem from "./ToppingOptionItem";

const OPTION_COMPONENT = {
  [ENDPOINTS.scoops]: ScoopOptionItem,
  [ENDPOINTS.toppings]: ToppingOptionItem,
};

const OrderOptions = ({ optionsType }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/${ENDPOINTS[optionsType]}`)
      .then((resp) => resp.json())
      .then(setOptions)
      .catch((err) => console.log(err));
  }, [optionsType]);

  if (!options.length) return <div>LOADING...</div>;

  const OptionItem = OPTION_COMPONENT[optionsType] || null;

  return (
    <Container>
      <Row>
        {options.map(({ name, imagePath }) => (
          <OptionItem name={name} imagePath={imagePath} />
        ))}
      </Row>
    </Container>
  );
};

export default OrderOptions;
