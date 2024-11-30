import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AssetPicking from './AssetSetting/AssetPicking.jsx';
import AssetTermSetting from './AssetSetting/AssetTermSetting.jsx';
import OnBoarding from './AssetSetting/OnBoarding.jsx';

export default function AssetSetting(props) {
  const setSymbol = props.setSymbol;
  const period = props.period;
  const setPeriod = props.setPeriod;
  const setSeed = props.setSeed;
  const setMonthly = props.setMonthly;
  const setIsReinvest = props.setIsReinvest;
  const isDollar = props.isDollar;
  const setIsDollar = props.setIsDollar;

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
            setIsReinvest={setIsReinvest}
            isDollar={isDollar}
            setIsDollar={setIsDollar}
          />
        </Col>
      </Row>
    </Container>
  );
}
