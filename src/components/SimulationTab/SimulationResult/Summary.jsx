import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

import { formatNumber } from '../../../utils/format';
import { getProfitClaaName } from '../../../utils/utils';

export default function Summary(props) {
  const {
    totalValuation,
    totalProfit,
    totalProfitRate,
    symbol,
    totalAmount,
    valuationCurrency,
    exchangeCurrency,
    extraCash,
  } = props;

  return (
    <div>
      <Card>
        <Card.Header>
          {valuationCurrency === 'USD(달러)' ? 'Valuation' : '평가금액'}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {formatNumber(totalValuation)}
            {' ' + valuationCurrency}
          </Card.Title>
          <Card.Text>
            <span className={getProfitClaaName(totalProfit)}>
              {totalProfit > 0 ? '+' : ''}
              {formatNumber(totalProfit)}
              {' ' + valuationCurrency} ({totalProfit > 0 ? '+' : ''}
              {totalProfitRate}% )
            </span>
          </Card.Text>
          <Card.Text>
            <strong>{symbol}</strong> {formatNumber(totalAmount)}
            {valuationCurrency === 'USD(달러)' ? ' shares' : ' 주'}
            <br />
            <strong>
              {valuationCurrency === 'USD(달러)' ? 'Cash' : '현금'}
            </strong>{' '}
            {extraCash + ' ' + exchangeCurrency}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
