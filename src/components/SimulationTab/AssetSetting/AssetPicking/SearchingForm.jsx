import React from 'react';

import Form from 'react-bootstrap/Form';

export default function SearchingForm() {
  return (
    <div>
      {' '}
      <Form className='d-flex'>
        <Form.Control type='search' placeholder='검색' />
      </Form>
    </div>
  );
}
