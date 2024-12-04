import React, { useState } from 'react';

import AssetCard from './AssetPicking/AssetCard';
import SearchingForm from './AssetPicking/SearchingForm';

export default function AssetPicking(props) {
  const setAsset = props.setAsset;
  const isDollar = props.isDollar;
  const asset = props.asset;

  return (
    <div>
      <SearchingForm setAsset={setAsset} isDollar={isDollar} />
      <AssetCard asset={asset} />
    </div>
  );
}
