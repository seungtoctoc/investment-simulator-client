import React, { useRef, useState } from 'react';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { findAssets } from '../../../../apis/apis';
import SearchResultCard from './SearchingForm/SearchResultCard';

export default function SearchingForm() {
  const [searchResult, setSearchResult] = useState([]);

  const resultLimit = 10;

  return (
    <div>
      {' '}
      <Form className='d-flex position-relative'>
        <Form.Control
          onSubmit={(e) => {
            e.preventDefault();
          }}
          placeholder='검색 (코드, 이름)'
          onChange={async (e) => {
            if (e.target.value) {
              const result = await findAssets(e.target.value, resultLimit);

              if (result && result.length > 0) {
                setSearchResult(result);
              }
              return;
            }
            setSearchResult([]);
          }}
        />
        <ListGroup
          className='position-absolute'
          style={{ width: '100%', top: '100%', zIndex: 10 }}
        >
          {searchResult.length > 0 ? (
            searchResult.map((asset, idx) => (
              <SearchResultCard asset={asset} key={idx} />
            ))
          ) : (
            <></>
          )}
        </ListGroup>
      </Form>
    </div>
  );
}
