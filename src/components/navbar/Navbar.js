import React from 'react'
import "../navbar/Navbar.scss"
import { BiSearchAlt } from "react-icons/bi"
import { IoMdContact } from "react-icons/io"
import { FaChevronDown } from "react-icons/fa"
import { MdOutlineFreeBreakfast } from "react-icons/md"
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbarTop">
                <div className="navbarLeft">
                    <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/white_logo3.0.png?v=1679318397&width=460" alt="" />
                    <ul className="collection">
                        <li className="item"><a href="/">Design  a  Customes  Shoe</a>
                            <FaChevronDown />
                        </li>
                        <li className="item"><a href="/cards">Marketplace</a>
                            <FaChevronDown />
                        </li>
                        <li className="item"><a href="/banner">Blog</a>

                            <FaChevronDown />
                        </li>
                        <li className="item"><a href="/wrapper">Buisness Inquiry</a>
                            <FaChevronDown />
                        </li>
                    </ul>
                </div>
                <div className="navbarRight">
                    <BiSearchAlt />
                    <IoMdContact />
                    <MdOutlineFreeBreakfast />

                </div>
            </div>


        </div>
    )
}

export default Navbar