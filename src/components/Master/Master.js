import React from 'react'
import "../Master/Master.scss"
function Master() {
    return (
        <div className='master'>
            <button className='mastrerBtn'>Watch Full Youtube Tutorial on Creating Custom Shoes</button>
            <div className="masterWrapper">
                <div className="masterWrtapperLeft">
                    <div className="masterWrapperTop">
                        <video muted autoPlay loop> <source src=' https://cdn.shopify.com/videos/c/vp/d3ef1b1be78244608698d560a3ccb11c/d3ef1b1be78244608698d560a3ccb11c.HD-1080p-7.2Mbps-13263137.mp4' type='video/mp4' />
                        </video>
                    </div>
                </div>
                <div className="masterWrapperRight">
                    <div className="masterWrapperRightTop">
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/second_horizontal_random_pictures_for_website.jpg?v=1679511091&width=800" alt="" />
                    </div>
                    <div className="masterWrapperRightBottom">
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/second_horizontal_random_pictures_for_website_1.jpg?v=1679511226&width=800" alt="" />
                    </div>

                </div>
            </div>
            <marquee className="marque">THE ORIGINAL HOME OF CUSTOM SHOES</marquee>
        </div>
    )
}

export default Master