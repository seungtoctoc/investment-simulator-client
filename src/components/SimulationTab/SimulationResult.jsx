import React from 'react';

import Container from 'react-bootstrap/Container';
import SummaryCard from './SimulationResult/SummaryCard';

export default function SimulationResult(props) {
  const result = props.result;
  const isDollar = props.isDollar;

  return (
    <div>
      {result ? (
        <>
          <Container>
            <SummaryCard
              title='평가금액'
              totalValuation={result.totalValuation}
              totalProfit={result.totalProfit}
              totalProfitRate={result.totalProfitRate}
              data={result.valuationHistory}
              isDollar={isDollar}
            />
          </Container>

          <p>평가 금액 : {result.totalValuation}</p>
          <p>총 수익 : {result.totalProfit}</p>
          <p>수익률 : {result.totalProfitRate}</p>
          <p>보유 주식 수 : {result.totalAmount}</p>
          <p>현금 : {result.extraCash}</p>

          <p>총 배당금(주식 통화) : {result.totalDividend}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
