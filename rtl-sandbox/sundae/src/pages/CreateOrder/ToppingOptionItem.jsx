import React from "react";

import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

const ToppingOptionItem = ({ name, imagePath }) => (
  <Col>
    <Image src={imagePath} alt={`${name}_topping`} />
  </Col>
);

export default ToppingOptionItem;
