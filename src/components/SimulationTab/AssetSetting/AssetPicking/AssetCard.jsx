import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function AssetCard(props) {
  const asset = props.asset;

  return (
    <Card bg={'light'.toLowerCase()} text={'dark'} className='mt-2'>
      <Card.Body>
        <Container>
          <Row>
            <Col
              md={3}
              className='d-none d-md-flex align-items-center justify-content-center'
            >
              <Image
                className='bg-dark-subtle'
                src={`https://images.financialmodelingprep.com/symbol/${asset.symbol}.png`}
                style={{ width: '80%' }}
                roundedCircle
              />
            </Col>
            <Col xs={12} md={9}>
              <Card.Text>
                <strong>
                  {asset.exchange.startsWith('KOS')
                    ? asset.symbol.slice(0, -3)
                    : asset.symbol}
                </strong>{' '}
                <span className='text-secondary'>{asset.exchange}</span>
              </Card.Text>
              <Card.Text>
                {asset.exchange.startsWith('KOS') && asset.korean_name
                  ? asset.korean_name
                  : asset.name}
                <br />
                {asset.exchange.startsWith('KOS') && asset.korean_name
                  ? asset.name
                  : asset.korean_name
                  ? asset.korean_name
                  : ''}
              </Card.Text>
              <Card.Text className='text-secondary text-end'>
                {asset.type === 'etf' ? 'etf' : ''}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
