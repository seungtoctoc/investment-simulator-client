import React from 'react';

export default function Footer() {
  return (
    <div
      className='bg-light mt-5 d-flex flex-column justify-content-center align-items-center'
      style={{ height: '280px', marginTop: '480px' }}
    >
      <div className='text-body-secondary text-center m-4'>
        investment simulator
      </div>
      <div className='text-body-secondary text-center'>
        contact:
        <p>dltmxor31@naver.com</p>
        <p>
          <a href='https://github.com/seungtoctoc' target='_blank'>
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
