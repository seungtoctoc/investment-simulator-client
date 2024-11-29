import React from 'react';
import { useState, useEffect } from 'react';

import AssetSetting from './AssetSetting';

export default function SimulationTab() {
  const [symbol, setSymbol] = useState('');
  const [period, setPeriod] = useState(10);
  const [seed, setSeed] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [isReinvestment, setIsReinvestment] = useState(false);

  // useEffect(() => {
  //   console.log('changed');
  //   console.log('symbol: ' + symbol);
  //   console.log('period: ' + period);
  //   console.log('seed: ' + seed);
  //   console.log('monthly: ' + monthly);
  //   console.log('isReinvestment: ' + isReinvestment);
  // }, [symbol, period, seed, monthly, isReinvestment]);

  return (
    <div>
      <AssetSetting
        setSymbol={setSymbol}
        period={period}
        setPeriod={setPeriod}
        setSeed={setSeed}
        setMonthly={setMonthly}
        setIsReinvestment={setIsReinvestment}
      />
    </div>
  );
}
