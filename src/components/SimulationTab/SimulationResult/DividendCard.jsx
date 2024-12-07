import React from 'react';

import Card from 'react-bootstrap/Card';
import { formatNumber } from '../../../utils/format';

export default function DividendHistory(props) {
  const {
    totalDividend,
    exchangeCurrency,
    valuationCurrency,
    numberOfDividend,
  } = props;

  return (
    <Card className='mt-5'>
      <Card.Header>
        {valuationCurrency === 'USD(달러)' ? 'Dividend' : '배당'}
      </Card.Header>
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
          <strong>
            {valuationCurrency === 'USD(달러)'
              ? 'Dividend Payment Count'
              : '배당 횟수'}
          </strong>
          {': ' + numberOfDividend}
          {valuationCurrency === 'USD(달러)' ? ' times' : ' 회'}
          <br />
          <strong>
            {valuationCurrency === 'USD(달러)'
              ? 'Cumulative Dividend'
              : '누적 배당금'}
          </strong>
          {': ' + formatNumber(totalDividend) + ' ' + exchangeCurrency}
        </Card.Text>
        <Card.Text>
          {valuationCurrency === 'USD(달러)'
            ? 'The dividend has been reinvested.'
            : '배당금은 재투자 되었습니다.'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
