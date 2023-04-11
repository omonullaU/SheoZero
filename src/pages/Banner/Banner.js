import React, { useState } from 'react'
import "../Cards/Cards.scss"
import data from '../../components/StaticDocument/StaticDocument'
// import img1 from "../../pages/Banner/img24.png"
function Cards() {
    // const [data, setData] = useState(data)
    return (
        <div className='cards'>
            <h1 className='h1'>Marketplace Shoes </h1>
            <div className="cardsItem">
                {
                    data.map((item, inx) => {
                        return (<div className="cardsItemNumber">
                            {/* <img src={img1} alt="" /> */}
                            <div className="cardsItemNumberImg">
                                <img className='termaBox' src={item.img} alt="" />
                                <img className='terma' src={item.hover} alt="" />
                            </div>
                            <button className='acrdsBtn'>+Quisk add</button>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <button>Customizse now</button>

                        </div>
                        )
                    })
                }
                {/* </div> */}
            </div>
            <div className="foterText">
                <h3>Custom Designed Shoes</h3>
                <p>At Shoe Zero's staff favorites collection you'll find some of our top-rated and best-selling customized shoe designs that have been created by our community. Our custom shoes are the perfect way to show off <br /> your individuality and unique style. With Shoe Zero, you can design your own sneakers and make a statement with your footwear.</p>
                <p>Our customized shoes are made with high-quality materials that are both durable and comfortable. Our easy-to-use design tool allows you to choose from a variety of colors, patterns, and materials to create <br /> your perfect pair of shoes. You can add your flare and artwork to make your shoes truly unique.</p>
                <p>Our staff favorites collection is a great place to find inspiration for your own customized shoe designs. Here, you can see what other customers have created and get ideas for your own distinctive pair of sneakers. Our collection features some of our best-selling shoe designs, so you can be sure that you're getting a pair of <br /> shoes that are both stylish and popular. Like what you see, but want to make it your own? Use these staff picks to add that extra bit of you to your <br /> customized shoe design. Our shoes are perfect for any occasion, whether it's for casual wear or for sports and outdoor activities.</p>
                <p>Our best-selling customized shoes are a great way to show off your individuality and stand out from the crowd. Our shoes are loved by sneakerheads all over the world, and our staff favorites collection <br /> showcases some of the best designs that our customers have created.</p>
            </div>
        </div>


    )
}

export default Cards