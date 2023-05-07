import React from "react";

import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

const ScoopOptionItem = ({ name, imagePath }) => (
  <Col>
    <Image src={imagePath} alt={`${name}_scoop`} />
  </Col>
);

export default ScoopOptionItem;
