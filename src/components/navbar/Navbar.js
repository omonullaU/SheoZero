import React, { useState } from 'react'
import "../navbar/Navbar.scss"
import { BiSearchAlt } from "react-icons/bi"
import { IoMdContact } from "react-icons/io"
import { FaChevronDown } from "react-icons/fa"
import { MdOutlineFreeBreakfast } from "react-icons/md"
import { GoThreeBars } from "react-icons/go"
import { FaTimes } from 'react-icons/fa'
import { TfiFacebook } from 'react-icons/tfi'
import { BsInstagram } from "react-icons/bs"
import { SiPicpay } from "react-icons/si"
import { BsYoutube } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"
function Navbar() {
    const [bars, setBars] = useState(false)
    const [navbarItemDivProduct, setNavbarItemDivProduct] = useState(false)
    const toBars = () => {
        setBars(!bars)
    }
    const [item, setItem] = useState(false)
    const [navbarItemDivProduct1, setNavbarItemDivProduct1] = useState(false)
    const toItem = () => {
        setBars(!item)
    }

    const [des, uldes] = useState(false)
    const todes = () => {
        uldes(!des)
    }


    // const [des1, uldes1] = useState(false)
    // const todes1 = () => {
    //     uldes1(!des1)
    // }



    return (
        <div className='navbar'>
            <div className="navbarTop">
                <GoThreeBars className='bars' onClick={toBars} />

                {
                    bars && (
                        <div className="navbarPosition">
                            <FaTimes onClick={toBars} style={{ fontSize: "40px" }} />
                            <details>
                                <summary><a href="/banner">Design  a Customs  <br /> Shoe</a></summary>
                                <p>
                                    At ShoeZero, we use an innovative process to print vibrant designs on <br /> the custom shoes. However, it is still an involved process, so it takes 10 business days to: set the physical shoe parts up to match software, print on all the parts, dry the parts, sew the parts together, form the shoe, seal the shoe to preserve the design, heat treat again, and then finally ship off.
                                </p>
                            </details>
                            <hr />
                            <details>
                                <summary><a href="/cards">MarkeytPlace Blog</a></summary>
                                <p>
                                    At ShoeZero, we use an innovative process to print vibrant designs on <br /> the custom shoes. However, it is still an involved process, so it takes 10 business days to: set the physical shoe parts up to match software, print on all the parts, dry the parts, sew the parts together, form the shoe, seal the shoe to preserve the design, heat treat again, and then finally ship off.
                                </p>
                            </details>
                            <hr />
                            <details>
                                <summary><a href="/looks">Business  Inquiry</a></summary>
                                <p>
                                    At ShoeZero, we use an innovative process to print vibrant designs on <br /> the custom shoes. However, it is still an involved process, so it takes 10 business days to: set the physical shoe parts up to match software, print on all the parts, dry the parts, sew the parts together, form the shoe, seal the shoe to preserve the design, heat treat again, and then finally ship off.
                                </p>
                            </details>

                            <hr />
                            <details>
                                <summary><a href="/sandalse">What is  the  producation  of  custom  shoes</a></summary>
                                <p>
                                    At ShoeZero, we use an innovative process to print vibrant designs on <br /> the custom shoes. However, it is still an involved process, so it takes 10 business days to: set the physical shoe parts up to match software, print on all the parts, dry the parts, sew the parts together, form the shoe, seal the shoe to preserve the design, heat treat again, and then finally ship off.
                                </p>
                            </details>




                            <details>
                                <summary><a href="/shoeskids">shoeskids</a></summary>
                                <p>
                                    ShoesKids
                                </p>
                            </details>


                            <details>
                                <summary><a href="/wrapper">Wrapper</a></summary>
                                <p>
                                    Wrapper
                                </p>
                            </details>

                            <div className="navbarIcons">
                                <TfiFacebook />
                                <BsInstagram />
                                <SiPicpay />
                                <BsYoutube />
                                <FaTiktok />
                            </div>
                            <hr />
                            <h3>Account</h3>
                        </div>
                    )
                }

                <div className="navbarLeft">
                    <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/white_logo3.0.png?v=1679318397&width=460" alt="" />
                    <ul className="collection">
                        <li className="item" onClick={todes}> Design  a  Customes  Shoe
                            <FaChevronDown />
                            {
                                des && (
                                    <div className="navbarItemDivProduct">
                                        <p><a href="/banner">Custom Best Sellers</a></p>
                                        <p><a href="https://shoezero.com/collections/low-tops">Custom Low-Top</a></p>
                                        <p><a href="https://shoezero.com/collections/high-tops">Custom High-Tops</a></p>
                                        <p><a href="/looks">Custom Boots</a></p>
                                        <p><a href="/shoesKids">Custom Kids Shoes</a></p>
                                        <p><a href="/sandalse">Custom Sandals</a></p>
                                        <p><a href="https://shoezero.com/collections/custom-basketball-shoes">Custom Basketball Shoes</a></p>
                                        <p><a href="/banner">All Custom Shoes</a></p>
                                    </div>

                                )
                            }
                        </li>

                        <li className="item"><a href="/cards"> Marketplace</a>

                            <FaChevronDown />

                        </li>
                        <li className="item1">blog
                            <FaChevronDown />
                            {/* {
                                des || (
                                    <div className="navbarItemDivProduct1">
                                        
                                    </div>

                                )
                            } */}

                            <div className="navbarProductName">
                                <p><a href="/banner">Custom Best Sellers</a></p>
                                <p><a href="https://shoezero.com/collections/low-tops">Custom Low-Top</a></p>
                                <p><a href="https://shoezero.com/collections/high-tops">Custom High-Tops</a></p>
                                <p><a href="https://shoezero.com/collections/boots">Custom Boots</a></p>
                                <p><a href="https://shoezero.com/collections/kids">Custom Kids Shoes</a></p>
                                <p><a href="https://shoezero.com/collections/sandals">Custom Sandals</a></p>
                                <p><a href="https://shoezero.com/collections/custom-basketball-shoes">Custom Basketball Shoes</a></p>
                                <p><a href="https://shoezero.com/collections/build-your-own-custom-shoe">All Custom Shoes</a></p>
                            </div>
                        </li>
                        <li className="item2"><a href="/wrapper">Buisness Inquiry</a>
                            <FaChevronDown />
                            <div className="navbarProductName1">
                                <p><a href="/banner">Custom Best Sellers</a></p>
                                <p><a href="https://shoezero.com/collections/low-tops">Custom Low-Top</a></p>
                                <p><a href="https://shoezero.com/collections/high-tops">Custom High-Tops</a></p>
                                <p><a href="https://shoezero.com/collections/boots">Custom Boots</a></p>
                                <p><a href="https://shoezero.com/collections/kids">Custom Kids Shoes</a></p>
                                <p><a href="https://shoezero.com/collections/sandals">Custom Sandals</a></p>
                                <p><a href="https://shoezero.com/collections/custom-basketball-shoes">Custom Basketball Shoes</a></p>
                                <p><a href="https://shoezero.com/collections/build-your-own-custom-shoe">All Custom Shoes</a></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbarRight">
                    <BiSearchAlt />
                    <IoMdContact />
                    <MdOutlineFreeBreakfast />
                </div>
            </div>


        </div >
    )
}

export default Navbar