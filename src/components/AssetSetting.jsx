import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AssetPicking from './AssetPicking';
import AssetTermSetting from './AssetTermSetting';
import OnBoarding from './OnBoarding';

export default function AssetSetting(props) {
  const setSymbol = props.setSymbol;
  const period = props.period;
  const setPeriod = props.setPeriod;
  const setSeed = props.setSeed;
  const setMonthly = props.setMonthly;
  const setIsReinvestment = props.setIsReinvestment;

  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <AssetPicking setSymbol={setSymbol} />
          <OnBoarding />
        </Col>
        <Col xs={12} md={5}>
          <AssetTermSetting
            period={period}
            setPeriod={setPeriod}
            setSeed={setSeed}
            setMonthly={setMonthly}
            setIsReinvestment={setIsReinvestment}
          />
        </Col>
      </Row>
    </Container>
  );
}
