import React, { useEffect, useState } from 'react';

import PeriodPicking from './AssetTermSetting/PeriodPicking.jsx';
import InputMoney from './AssetTermSetting/InputMoney.jsx';
import CheckForm from './AssetTermSetting/checkForm.jsx';

export default function AssetTermSetting(props) {
  const period = props.period;
  const setPeriod = props.setPeriod;
  const setSeed = props.setSeed;
  const setMonthly = props.setMonthly;
  const setIsReinvest = props.setIsReinvest;
  const isDollar = props.isDollar;
  const setIsDollar = props.setIsDollar;

  const [forexText, setForexText] = useState('원 (KRW ₩)');

  useEffect(() => {
    console.log('effect');
    if (isDollar) {
      setForexText('달러 (USD $)');
      return;
    }
    setForexText('원 (KRW ₩)');
  }, [isDollar]);

  return (
    <div>
      <PeriodPicking period={period} setPeriod={setPeriod} />
      <InputMoney
        title='시드'
        subTitle='seed money'
        setMoney={setSeed}
        forexText={forexText}
      />
      <InputMoney
        title='월 납입'
        subTitle='monthly investment'
        setMoney={setMonthly}
        forexText={forexText}
      />
      <CheckForm
        title='배당금 재투자'
        subTitle='reinvest dividends'
        setFunction={setIsReinvest}
      />
      <CheckForm title='달러(USD $)' setFunction={setIsDollar} />
    </div>
  );
}
