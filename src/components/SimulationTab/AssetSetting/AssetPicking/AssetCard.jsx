import React from 'react';

import Card from 'react-bootstrap/Card';

export default function AssetCard(props) {
  const asset = props.asset;

  return (
    <Card bg={'light'.toLowerCase()} text={'dark'} className='mt-2'>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
}
