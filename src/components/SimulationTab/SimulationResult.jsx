import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Summary from './SimulationResult/Summary';
import DividendCard from './SimulationResult/DividendCard';
import ZoomableLineChart from './SimulationResult/ZoomableLineChart';
import ColumnChart from './SimulationResult/ColumnChart';
import SplitCard from './SimulationResult/SplitCard';

export default function SimulationResult(props) {
  const result = props.result;
  const [formattedValuationHistory, setFormattedValuationHistory] = useState(
    []
  );
  const [formattedDividendHistory, setFormattedDividendHistory] = useState([]);

  useEffect(() => {
    setFormattedValuationHistory(
      result.valuationHistory.map((history) => ({
        x: history.date,
        y: history.valuation,
      }))
    );

    setFormattedDividendHistory(
      result.dividendHistory.map((history) => ({
        x: history.date,
        y: history.dividend,
      }))
    );
  }, [result]);

  return (
    <div>
      {result ? (
        <>
          <Container>
            <Summary
              totalValuation={result.totalValuation}
              totalProfit={result.totalProfit}
              totalProfitRate={result.totalProfitRate}
              valuationHistory={result.valuationHistory}
              symbol={result.symbol}
              totalAmount={result.totalAmount}
              valuationCurrency={result.valuationCurrency}
              exchangeCurrency={result.exchangeCurrency}
              extraCash={result.extraCash}
            />
            <ZoomableLineChart
              name='평가금액'
              data={formattedValuationHistory}
              currency={result.valuationCurrency}
            />
            <DividendCard
              totalDividend={result.totalDividend}
              exchangeCurrency={result.exchangeCurrency}
              numberOfDividend={result.dividendHistory.length}
              valuationCurrency={result.valuationCurrency}
            />
            <ColumnChart
              name='배당금'
              data={formattedDividendHistory}
              currency={result.exchangeCurrency}
            />
            <SplitCard
              splitHistory={result.splitHistory}
              valuationCurrency={result.valuationCurrency}
            />
          </Container>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
