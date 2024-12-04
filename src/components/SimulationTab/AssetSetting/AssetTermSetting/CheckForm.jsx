import React from 'react';

import Form from 'react-bootstrap/Form';

export default function CheckForm(props) {
  const title = props.title;
  const subTitle = props.subTitle;
  const setFunction = props.setFunction;

  return (
    <>
      <Form.Check
        className='m-4'
        type='switch'
        label={
          <>
            {title}
            <span className='text-secondary'> {subTitle}</span>
          </>
        }
        onChange={(e) => {
          setFunction(e.target.checked);
        }}
      />
    </>
  );
}
