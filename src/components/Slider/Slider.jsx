import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
export default function Slider({ images }) {
    return (
        <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            className='h-[400px]'
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {
                images?.map((image, index) => (
                    <SwiperSlide key={index} className='w-full h-full'>
                        <img src={image} alt="" className='w-full h-full object-fill' />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
