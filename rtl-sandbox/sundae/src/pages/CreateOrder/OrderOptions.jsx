import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";

import { BASE_URL, ENDPOINTS } from "../../constants/api";
import ScoopOptionItem from "./ScoopOptionItem";
import ToppingOptionItem from "./ToppingOptionItem";

const OPTION_COMPONENT = {
  [ENDPOINTS.scoops]: ScoopOptionItem,
  [ENDPOINTS.toppings]: ToppingOptionItem,
};

const OrderOptions = ({ optionsType, onError }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/${ENDPOINTS[optionsType]}`)
      .then((resp) => resp.json())
      .then(setOptions)
      .catch((err) => onError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsType]);

  if (!options.length) return <Row>LOADING...</Row>;

  const OptionItem = OPTION_COMPONENT[optionsType];

  return (
    <Row>
      {options.map(({ name, imagePath }) => (
        <OptionItem
          key={`${imagePath}_${name}`}
          name={name}
          imagePath={imagePath}
        />
      ))}
    </Row>
  );
};

export default OrderOptions;
