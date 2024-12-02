import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

export default function SearchResultCard(props) {
  const asset = props.asset;

  return (
    <div>
      <ListGroup.Item>
        <div>
          <strong> {asset.symbol} </strong>
          <span className='text-secondary'> {asset.exchange} </span>
          <span>
            {' '}
            {asset.exchange.startsWith('KOS') ? asset.korean_name : asset.name}
          </span>
        </div>
      </ListGroup.Item>
    </div>
  );
}
