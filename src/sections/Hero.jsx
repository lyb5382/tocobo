import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { heroSlides } from '../util/hero'
import '../styles/section/hero.scss'
const Hero = () => {
  return (
    <div className='hero-container'>
      <Swiper>

        {heroSlides.map((slide) => (

          <SwiperSlide
            key={slide.id}
          >{slide.title}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero