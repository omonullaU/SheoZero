import React from 'react'
import "../Container/Container.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../Container/img1.png"
import img2 from "../Container/img2.png"

function Container() {
    return (
        <div className='container'>
            <div className="containerTop">
                <h1>Featured Custom Shoe Partner</h1>
                <p>Launch Your Custom Shoe Line Today for the chance to be featured. Simply start creating custom <br /> shoes and share them on social media to start building a following.</p>
            </div>

            <div className="containerBottom">
                <div className="containerBottomLeft">
                    <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/Screen_Shot_2023-03-09_at_03.31.27.png?v=1678333755&width=600" alt="" />
                </div>
                <div className="containerBottomRight">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="silderDiv">
                                <div className="sliderDivHover">
                                    <img className='sliderLogo' src="https://ae03.alicdn.com/kf/S463089120fe54ef28cceefd205c248ebf.jpg" alt="" />
                                </div>
                                <div className="swiperImg">
                                    <img className='swiperLogo' src={img2} alt="" />
                                </div>
                                <h3>Customizable Higt Top  Synthetic Leather <br /> Sneakter</h3>
                                <p>$93,95 </p>
                                <div className='swiperDivText'>Customize now</div>
                            </div>
                        </SwiperSlide>




                        <SwiperSlide>
                            {/* <img src="https://hips.hearstapps.com/hmg-prod/images/pop-index-2020-chevrolet-corvette-c8-102-1571146873.jpg?crop=1.00xw:0.502xh;0,0.370xh&resize=640:*" alt="" /> */}
                            <div className="silderDiv">
                                <div className="sliderDivHover">
                                    <img src="https://ae03.alicdn.com/kf/S463089120fe54ef28cceefd205c248ebf.jpg" alt="" />
                                </div>
                                <div className="swiperImg">
                                    <img src={img1} alt="" />
                                </div>
                                <h3>Customizable Higt Top  Synthetic Leather <br /> Sneakter</h3>
                                <p>$93,95 </p>
                                <div className='swiperDivText'>Customize now</div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Container