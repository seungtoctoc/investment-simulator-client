import React, { useState } from 'react';

import AssetCard from './AssetPicking/AssetCard';
import SearchingForm from './AssetPicking/SearchingForm';

export default function AssetPicking(props) {
  const setSymbol = props.setSymbol;
  const isDollar = props.isDollar;

  const [asset, setAsset] = useState({
    symbol: 'VOO',
    name: 'Vanguard 500 Index Fund',
    type: 'etf',
    exchange: 'AMEX',
    korean_name: 'VANGUARD S&P 500 ETF',
  });

  return (
    <div className='p-4'>
      <SearchingForm
        setAsset={setAsset}
        setSymbol={setSymbol}
        isDollar={isDollar}
      />
      <AssetCard asset={asset} />
    </div>
  );
}
