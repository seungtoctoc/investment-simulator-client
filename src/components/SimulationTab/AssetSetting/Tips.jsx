import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { tips } from '../../../utils/tips';

export default function OnBoarding() {
  const [contents, setContents] = useState([]);

  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  useEffect(() => {
    setContents(tips);
  }, []);

  return (
    <>
      {contents && contents.length > 0 ? (
        <Swiper
          className='mt-2 mb-2 bg-primary'
          style={{ height: '100px' }}
          direction='vertical'
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {contents.map((content, idx) => (
            <SwiperSlide style={slideStyle} key={idx}>
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
