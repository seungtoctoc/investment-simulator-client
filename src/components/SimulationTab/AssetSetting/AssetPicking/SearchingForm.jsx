import React, { useRef, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { findAssets } from '../../../../apis/apis';
import SearchResultCard from './SearchingForm/SearchResultCard';

export default function SearchingForm() {
  const [searchResult, setSearchResult] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const formRef = useRef(null);

  const resultLimit = 10;

  const handleOutsideClick = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <Form
        className='d-flex position-relative'
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Control
          placeholder='검색 (코드, 이름)'
          onChange={async (e) => {
            if (e.target.value) {
              const result = await findAssets(e.target.value, resultLimit);

              if (result && result.length > 0) {
                setSearchResult(result);
                setIsListVisible(true);
              }
              return;
            }
            setSearchResult([]);
            setIsListVisible(false);
          }}
        />
        {isListVisible && (
          <ListGroup
            className='position-absolute'
            style={{ width: '100%', top: '100%', zIndex: 10 }}
          >
            {searchResult.map((asset, idx) => (
              <SearchResultCard asset={asset} key={idx} />
            ))}
          </ListGroup>
        )}
      </Form>
    </div>
  );
}
