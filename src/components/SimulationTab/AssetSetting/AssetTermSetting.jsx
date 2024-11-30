import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { convertNumberToKorean } from '../../../utils/convert.js';

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
    <div className='p-4'>
      <Form.Label>
        투자 기간: <strong className='h5'>{period}년</strong>
        <br />
        <span className='text-secondary'>
          {' '}
          period: {period} year{period > 1 ? 's' : ''}
        </span>
      </Form.Label>
      <Form.Range
        min='0'
        max='5'
        label='preiod'
        defaultValue='3'
        onChange={(e) => {
          setPeriod(periods[e.target.value]);
        }}
      />

      <Form.Label className='mt-4'>시드</Form.Label>
      <InputGroup className=''>
        <Form.Control
          aria-label='seed'
          value={formattedSeed}
          onChange={(e) => {
            const rawValue = Number(e.target.value.replaceAll(',', ''));

            if (isNaN(rawValue)) {
              setSeedText('숫자를 입력하세요');
              setSeedError(true);
              return;
            }

            setFormattedSeed(rawValue.toLocaleString());
            setSeed(rawValue);

            setSeedError(false);
            setSeedText(convertNumberToKorean(rawValue) + '원');
          }}
        />
        <InputGroup.Text> {forexText} </InputGroup.Text>
      </InputGroup>
      <p
        className={
          seedError ? 'text-end text-danger' : 'text-end text-body-secondary'
        }
      >
        {seedText}
      </p>

      <Form.Label className='mt-2'>월 납입</Form.Label>
      <InputGroup className=''>
        <Form.Control
          aria-label='monthly'
          value={formattedMonthly}
          onChange={(e) => {
            const rawMonthly = Number(e.target.value.replaceAll(',', ''));

            if (isNaN(rawMonthly)) {
              setMonthlyText('숫자를 입력하세요');
              setMonthlyError(true);
              return;
            }

            setFormattedMonthly(rawMonthly.toLocaleString());
            setMonthly(rawMonthly);

            setMonthlyError(false);
            setMonthlyText(convertNumberToKorean(rawMonthly) + '원');
          }}
        />
        <InputGroup.Text> {forexText} </InputGroup.Text>
      </InputGroup>
      <p
        className={
          monthlyError ? 'text-end text-danger' : 'text-end text-body-secondary'
        }
      >
        {monthlyText}
      </p>

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
