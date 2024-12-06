import React from 'react';

import NavBar from '../components/NavBar';
import SimulationTab from '../components/SimulationTab';
import Footer from '../components/Footer';
import Advertising from '../components/SimulationTab/AssetSetting/Advertising';

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <SimulationTab />
      <Advertising />
      <Footer />
    </div>
  );
}
