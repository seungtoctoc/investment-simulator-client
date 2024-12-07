import React from 'react';

import Card from 'react-bootstrap/Card';

export default function SplitCard(props) {
  const { splitHistory, valuationCurrency } = props;

  return (
    <Card className='mb-5'>
      <Card.Header>
        <>{valuationCurrency === 'USD(달러)' ? 'Split' : '분할'}</>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {splitHistory.length > 0 ? (
            splitHistory.map((history) => (
              <div key={history.date}>
                <strong>{history.date}</strong>
                {' ' + history.beforeAmount}{' '}
                {valuationCurrency === 'USD(달러)' ? ' shares' : ' 주'}{' '}
                {' → ' + history.afterAmount}
                {valuationCurrency === 'USD(달러)' ? ' shares' : ' 주'}
              </div>
            ))
          ) : (
            <>
              {valuationCurrency === 'USD(달러)'
                ? 'There is no split information.'
                : '분할 정보가 없습니다.'}
            </>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
