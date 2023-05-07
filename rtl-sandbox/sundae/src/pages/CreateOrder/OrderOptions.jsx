import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { BASE_URL } from "../../constants/api";
import ScoopOptionItem from "./ScoopOptionItem";

const OrderOptions = ({ optionsType }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/${optionsType}`)
      .then((resp) => resp.json())
      .then(setOptions)
      .catch((err) => console.log(err));
  }, [optionsType]);

  if (!options.length) return <div>LOADING...</div>;
  return (
    <Container>
      <Row>
        {options.map(({ name, imagePath }) => (
          <ScoopOptionItem name={name} imagePath={imagePath} />
        ))}
      </Row>
    </Container>
  );
};

export default OrderOptions;
