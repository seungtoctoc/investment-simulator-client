import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AssetTermSetting() {
  return (
    <div className='p-4'>
      <Form.Label>기간</Form.Label>
      <Form.Range min='0' max='5' label='preiod' />

      <Form.Label className='mt-4'>시드</Form.Label>
      <InputGroup className='mb-3'>
        <Form.Control aria-label='seedMoney' />
        <InputGroup.Text> 원 (KRW) </InputGroup.Text>
      </InputGroup>

      <Form.Label className='mt-4'>월 납입</Form.Label>
      <InputGroup className='mb-3'>
        <Form.Control aria-label='monthlyPayment' />
        <InputGroup.Text> 원 (KRW) </InputGroup.Text>
      </InputGroup>

      <Form.Check
        className='mt-4'
        type='switch'
        id='isReinvestment'
        label='배당금 재투자'
      />
    </div>
  );
}
