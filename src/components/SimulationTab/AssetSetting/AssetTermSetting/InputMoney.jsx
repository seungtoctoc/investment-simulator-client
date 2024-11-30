import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { convertNumberToKorean } from '../../../../utils/convert.js';

export default function InputMoney(props) {
  const title = props.title;
  const forexText = props.forexText;
  const setMoney = props.setMoney;

  const [text, setText] = useState('');
  const [isNumber, setIsNumber] = useState(true);
  const [formattedMoney, setFormattedMoney] = useState(0);

  return (
    <>
      <Form.Label className='mt-4'>시드</Form.Label>
      <InputGroup className=''>
        <Form.Control
          value={formattedMoney}
          onChange={(e) => {
            const rawValue = Number(e.target.value.replaceAll(',', ''));

            if (isNaN(rawValue)) {
              setText('숫자를 입력하세요');
              setIsNumber(false);
              return;
            }

            setFormattedMoney(rawValue.toLocaleString());
            setMoney(rawValue);

            setIsNumber(true);
            setText(convertNumberToKorean(rawValue));
          }}
        />
        <InputGroup.Text> {forexText} </InputGroup.Text>
      </InputGroup>
      <p
        className={
          isNumber ? 'text-end text-body-secondary' : 'text-end text-danger'
        }
      >
        {text}
      </p>
    </>
  );
}
