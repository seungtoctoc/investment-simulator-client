import React from 'react';
import { useState, useEffect } from 'react';

import AssetSetting from './SimulationTab/AssetSetting';

export default function SimulationTab() {
  const [symbol, setSymbol] = useState('');
  const [period, setPeriod] = useState(10);
  const [seed, setSeed] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [isReinvest, setIsReinvest] = useState(false);
  const [isDollar, setIsDollar] = useState(false);

  // useEffect(() => {
  //   console.log('changed');
  //   console.log('symbol: ' + symbol);
  //   console.log('period: ' + period);
  //   console.log('seed: ' + seed);
  //   console.log('monthly: ' + monthly);
  //   console.log('isReinvest: ' + isReinvest);
  //   console.log('isDallor: ' + isDollar);
  // }, [symbol, period, seed, monthly, isReinvest, isDollar]);

  return (
    <div>
      <AssetSetting
        setSymbol={setSymbol}
        period={period}
        setPeriod={setPeriod}
        setSeed={setSeed}
        setMonthly={setMonthly}
        setIsReinvest={setIsReinvest}
        isDollar={isDollar}
        setIsDollar={setIsDollar}
      />
    </div>
  );
}
