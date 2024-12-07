import React from 'react';
import { useState, useEffect } from 'react';

import AssetSetting from './SimulationTab/AssetSetting';
import SimulationResult from './SimulationTab/SimulationResult';
import SubmitButton from './SimulationTab/SubmitButton';

import { simulateAsset } from '../apis/apis';

export default function SimulationTab() {
  const [period, setPeriod] = useState(10);
  const [seed, setSeed] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [isReinvest, setIsReinvest] = useState(true);
  const [isDollar, setIsDollar] = useState(false);
  const [asset, setAsset] = useState({
    symbol: 'VOO',
    name: 'Vanguard 500 Index Fund',
    type: 'etf',
    exchange: 'AMEX',
    korean_name: null,
  });

  const [result, setResult] = useState({
    totalValuation: 0,
    totalProfit: 0,
    totalProfitRate: 0,
    totalAmount: 0,
    totalDividend: 0,
    extraCash: 0,
    valuationHistory: [{ date: 0, valuation: 0 }],
    purchaseHistory: [{ date: 0, price: 0, amount: 0, totalAmount: 0 }],
    dividendHistory: [{ date: 0, amount: 0, dividend: 0, totalDividend: 0 }],
    splitHistory: [{ date: 0, beforeAmount: 0, afterAmount: 0 }],
  });
  const [loadResult, setLoadResult] = useState(false);

  const getResult = () => {
    return simulateAsset(
      asset.symbol,
      asset.exchange,
      period,
      seed,
      monthly,
      isReinvest,
      isDollar
    ).then((resp) => {
      setResult(resp);
      setLoadResult(true);
      console.log('resp: ', resp);
      return true;
    });
  };

  return (
    <div>
      <AssetSetting
        setAsset={setAsset}
        asset={asset}
        period={period}
        setPeriod={setPeriod}
        setSeed={setSeed}
        setMonthly={setMonthly}
        setIsReinvest={setIsReinvest}
        isDollar={isDollar}
        setIsDollar={setIsDollar}
      />
      <SubmitButton getResult={getResult} />
      {loadResult ? <SimulationResult result={result} /> : <div></div>}
    </div>
  );
}
