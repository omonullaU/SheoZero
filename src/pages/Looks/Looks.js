import React from 'react'
import img from "../Looks/img.png"
import img1 from "../Looks/img1.png"
import img2 from "../Looks/img2.png"


import "../Looks/Looks.scss"
function Looks() {
    return (
        <div className='cards'>
            <h1 className='h1'>Custom Boots </h1>
            <div className="cardsItem">

                <div className="cardsItemNumber">
                    <div className="cardsItemNumberImg">
                        <img className=' termaBox' src={img} alt="" />
                        <img className='terma' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200820110872DQWQZ6nMt386DYYTch8fMANyHm2nM3_25ee98b7-e393-43a2-b85e-058e06df8550.jpg?v=1660071681&width=300" alt="" />

                    </div>
                    <button className='acrdsBtn'>+Quisk add</button>
                    <h3>Customizable Classic Eco <br /> Vegan Leather Custom <br /> Boots</h3>
                    <p>1 395 000som</p>
                    <button>Customizse now</button>

                </div>



                <div className="cardsItemNumber">
                    <div className="cardsItemNumberImg">
                        <img className='termaBox' src={img1} alt="" />
                        <img className='terma' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20210527200555CG6XtfHHZwcJjs2NrFAbRF5hpChK7f_27cb83ca-7e01-4726-9a3d-3cefa2948011.jpg?v=1660071640&width=300" alt="" />

                    </div>
                    <button className='acrdsBtn'>+Quisk add</button>
                    <h3>Customizable Retro Thick <br /> Boots</h3>
                    <p>1 395 000som</p>
                    <button>Customizse now</button>

                </div>





                <div className="cardsItemNumber">
                    <div className="cardsItemNumberImg">
                        <img className=' termaBox' src={img2} alt="" />
                        <img className='terma' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200827090860r3cCCnihcTxcFt6AGNXQReeXm7YjrZ_4510c0fc-3a52-4087-9368-840ee7fda5af.jpg?v=1660071723&width=300" alt="" />

                    </div>
                    <button className='acrdsBtn'>+Quisk add</button>
                    <h3>Customizable Zero Eco <br /> Synthetic Leather Boots</h3>
                    <p>1 395 000som</p>
                    <button>Customizse now</button>

                </div>

            </div>
        </div>

    )
}

export default Looks