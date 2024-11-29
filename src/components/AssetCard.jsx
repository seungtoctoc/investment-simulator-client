import React from 'react';

import Card from 'react-bootstrap/Card';

export default function AssetCard() {
  return (
    <Card bg={'light'.toLowerCase()} text={'dark'} className='mt-2'>
      <Card.Body>
        <Card.Title> VOO </Card.Title>
        <Card.Text>Vanguard S&P 500 ETF</Card.Text>
      </Card.Body>
    </Card>
  );
}
