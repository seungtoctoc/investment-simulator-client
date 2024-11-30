import React from 'react';

import Form from 'react-bootstrap/Form';

export default function PeriodPicking(props) {
  const period = props.period;
  const setPeriod = props.setPeriod;

  const periods = [1, 2, 5, 10, 20, 30];

  return (
    <>
      <Form.Label>
        투자 기간: <strong className='h5'>{period}년</strong>
        <br />
        <span className='text-secondary'>
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
    </>
  );
}
