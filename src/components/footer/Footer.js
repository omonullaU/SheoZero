import React from 'react'
import { FiInstagram } from "react-icons/fi"
import { TfiFacebook } from "react-icons/tfi"
import { FaPinterestP } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { SiTiktok } from "react-icons/si"
import "../footer/Footer.scss"

function Footer() {
    return (
        <div className='footer'>

            <div className="footerTopB">
                <div className="footerTopBLeft">
                    <h1>Footer menu</h1>
                    <p>Search</p>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Shipping Policy</p>
                    <p>Terms of Service</p>
                    <p>Refer A Friend</p>
                    <p>Do not sell my personal</p>
                    <p> information</p>

                </div>
                <div className="footerTopBRight">
                    <h1>Have a Question</h1>
                    <p>Message us at +1(402)699-6524</p>
                </div>
            </div>
            <div className="between">
                <div className="betweenIcon">
                    <TfiFacebook />
                    <FiInstagram />
                    <FaPinterestP />
                    <BsYoutube />
                    <SiTiktok />
                </div>
                <div className="betweenSelect">
                    <select>
                        <option value="">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Lithuania_Flat_Round-1024x1024.png" alt="" />
                            Lithuania (EUR €)
                        </option>
                        <option value="">
                            <img src="" alt="" />
                            <h1></h1>
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>

                    </select>
                </div>
            </div>
            <p className='wear'>© 2023, Shoe Zero. Business Address: 183 Cambridge MA, 02140 United States</p>
        </div>
    )
}

export default Footer