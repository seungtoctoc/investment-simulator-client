import React from 'react';

import NavBar from '../components/NavBar';
import SimulationTab from '../components/SimulationTab';
import Footer from '../components/Footer';
import LongAdvertising from '../components/Advertising/LongAdvertising';

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <SimulationTab />
      <LongAdvertising
        unit1={`${import.meta.env.VITE_ADDFIT_UNIT_2}`}
        unit2={`${import.meta.env.VITE_ADDFIT_UNIT_3}`}
      />
      <Footer />
    </div>
  );
}
