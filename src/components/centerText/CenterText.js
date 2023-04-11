import React from 'react'
import "../centerText/CenterText.scss"
function CenterText() {
    return (
        <div className='centerText'>

            <h1 className='customText'>Custom Shoe Blog posts</h1>
            <div className="centerTextNumber">
                <div className="centerNumber1">
                    <div className="centerNumberImg">
                        <div className="enter">
                            <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/articles/banner_image_copy.jpg?v=1680638710&width=500" alt="" />

                        </div>
                        <h1>Create and Sell Print On <br /> Shoes with ShoeZero</h1>
                        <p>Did you always have the dream of starting a shoe brand like <br /> Nike or Jordan, or are you currently an entrepreneur seeking <br /> a way to differentiate yourself in the competitive apparel <br /> industry? If s...</p>
                    </div>
                </div>
                <div className="centerNumber1">
                    <div className="centerNumberImg">
                        <div className="enter">
                            <img className='logoItem' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/articles/Option2.png?v=1663094668&width=500" alt="" />

                        </div>
                        <h1>How a Unique Custom <br /> Shoe Brand Can Set Your <br /> Business for Success</h1>
                        <p>Did you always have the dream of starting a shoe brand like <br /> Nike or Jordan, or are you currently an entrepreneur seeking <br /> a way to differentiate yourself in the competitive apparel <br /> industry? If s...</p>
                    </div>
                </div>
                <div className="centerNumber1">
                    <div className="centerNumberImg">
                        <div className="enter">
                            <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/articles/brad-neathery-mGH253KbfaY-unsplash.jpg?v=1649328185&width=500" alt="" />

                        </div>
                        <h1>Why You Need A Great Brand</h1>
                        <p>Did you always have the dream of starting a shoe brand like <br /> Nike or Jordan, or are you currently an entrepreneur seeking <br /> a way to differentiate yourself in the competitive apparel <br /> industry? If s...</p>
                    </div>
                </div>

            </div>
            <div className="footerTopLogo">
                <input type="text" placeholder='Email' />
                <button>Get $20 Gift Card</button>
            </div>
        </div>
    )
}

export default CenterText