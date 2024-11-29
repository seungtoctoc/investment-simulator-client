import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AssetPicking from './AssetPicking';
import AssetTermSetting from './AssetTermSetting';

export default function AssetSetting() {
  return (
    <Container>
      <Row>
        <Col xs={7}>
          <AssetPicking />
        </Col>
        <Col>
          <AssetTermSetting />
        </Col>
      </Row>
    </Container>
  );
}
