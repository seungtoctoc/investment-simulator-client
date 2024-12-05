import React from 'react';

export default function SimulationResult(props) {
  const result = props.result;

  return (
    <div>
      {result ? (
        <>
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
