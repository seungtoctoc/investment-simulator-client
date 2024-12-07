import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Advertising from './Advertising';

export default function LongAdvertising(props) {
  const { unit1, unit2 } = props;

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <Advertising unit={unit1} />
          </Col>
          <Col md={6} xs={12}>
            <Advertising unit={unit2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
