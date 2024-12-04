import React from 'react';

import Button from 'react-bootstrap/Button';

export default function SubmitButton() {
  return (
    <div className='d-grid p-5'>
      <Button variant='outline-info' size='lg'>
        Simulate !
      </Button>
    </div>
  );
}
