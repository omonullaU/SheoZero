import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} className='swiper'
        >
            <div className="swiper">
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>

                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>

            </div>
            ...
        </Swiper>
    );
};