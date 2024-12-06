import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { tips } from '../../../utils/tips';

export default function OnBoarding() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents(tips);
  }, []);

  return (
    <>
      {contents && contents.length > 0 ? (
        <Swiper
          className='mt-2 mb-2'
          style={{ height: '120px' }}
          direction='vertical'
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {contents.map((content, idx) => (
            <SwiperSlide
              className='text-center align-items-center justify-content-center d-flex'
              key={idx}
            >
              {content[0]}
              <br />
              {content[1]}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </>
  );
}
