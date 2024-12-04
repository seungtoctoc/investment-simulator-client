import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function OnBoarding() {
  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Swiper
      style={{ height: '80px' }}
      direction={'vertical'}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide style={slideStyle}>Slide 1</SwiperSlide>
      <SwiperSlide style={slideStyle}>Slide 2</SwiperSlide>
      <SwiperSlide style={slideStyle}>Slide 3</SwiperSlide>
    </Swiper>
  );
}
