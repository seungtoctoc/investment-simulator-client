import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { convertNumberToKorean } from '../../../utils/convert.js';
import PeriodPicking from './AssetTermSetting/PeriodPicking.jsx';
import InputMoney from './AssetTermSetting/InputMoney.jsx';

export default function AssetTermSetting(props) {
  const period = props.period;
  const setPeriod = props.setPeriod;
  const setSeed = props.setSeed;
  const setMonthly = props.setMonthly;
  const setIsReinvestment = props.setIsReinvestment;
  const isDollar = props.isDollar;
  const setIsDollar = props.setIsDollar;

  const [seedText, setSeedText] = useState('');
  const [seedError, setSeedError] = useState(false);
  const [formattedSeed, setFormattedSeed] = useState(0);

  const [monthlyText, setMonthlyText] = useState('');
  const [monthlyError, setMonthlyError] = useState(false);
  const [formattedMonthly, setFormattedMonthly] = useState(0);

  const [forexText, setForexText] = useState('원 (KRW ₩)');

  const periods = [1, 2, 5, 10, 20, 30];
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

      <InputMoney title='시드' setMoney={setSeed} forexText={forexText} />

      <InputMoney title='월 납입' setMoney={setMonthly} forexText={forexText} />

      <Form.Check
        className='mt-4'
        type='switch'
        id='isReinvestment'
        label='배당금 재투자'
        onChange={(e) => {
          setIsReinvestment(e.target.checked);
        }}
      />

      <Form.Check
        className='mt-4'
        type='switch'
        id='isDollar'
        label='달러(USD $)'
        onChange={(e) => {
          setIsDollar(e.target.checked);
        }}
      />
    </div>
  );
}
