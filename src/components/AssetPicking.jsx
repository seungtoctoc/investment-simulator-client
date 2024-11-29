import React from 'react';

import AssetCard from './AssetCard';
import SearchingForm from './SearchingForm';

export default function AssetPicking() {
  return (
    <div className='p-4'>
      <SearchingForm />
      <AssetCard />
    </div>
  );
}
