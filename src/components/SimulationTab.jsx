import React from 'react';
import { useState, useEffect } from 'react';

import AssetSetting from './SimulationTab/AssetSetting';
import SimulationResult from './SimulationTab/SimulationResult';
import SubmitButton from './SimulationTab/SubmitButton';

export default function SimulationTab() {
  const [period, setPeriod] = useState(10);
  const [seed, setSeed] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [isReinvest, setIsReinvest] = useState(false);
  const [isDollar, setIsDollar] = useState(false);
  const [asset, setAsset] = useState({
    symbol: 'VOO',
    name: 'Vanguard 500 Index Fund',
    type: 'etf',
    exchange: 'AMEX',
    korean_name: null,
  });

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
      <SubmitButton />
      <SimulationResult />
    </div>
  );
}
