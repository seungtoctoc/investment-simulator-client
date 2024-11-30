import React from 'react';

import AssetCard from './AssetPicking/AssetCard';
import SearchingForm from './AssetPicking/SearchingForm';

export default function AssetPicking() {
  return (
    <div className='p-4'>
      <SearchingForm />
      <AssetCard />
    </div>
  );
}
