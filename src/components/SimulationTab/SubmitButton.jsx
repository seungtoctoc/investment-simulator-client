import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function SubmitButton(props) {
  const getResult = props.getResult;

  const [isWaiting, setIsWaiting] = useState(false);

  const clickSubmitButton = async () => {
    if (isWaiting) {
      return;
    }

    setIsWaiting(true);
    getResult().then(() => {
      setIsWaiting(false);
      console.log('false');
    });
  };

  return (
    <div className='d-grid p-5'>
      <Button
        variant='outline-info'
        size='lg'
        onClick={() => {
          clickSubmitButton();
        }}
      >
        {isWaiting ? (
          <>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
          </>
        ) : (
          <span>Simulate!</span>
        )}
      </Button>
    </div>
  );
}