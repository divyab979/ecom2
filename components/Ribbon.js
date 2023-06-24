import React from 'react'
import { FiShoppingBag, FiHeart, FiShoppingCart, FiPhone, FiSearch, FiSmartphone, FiTwitter, FiUser } from 'react-icons/fi'

const Ribbon = () => {
    return (
        <div>
            <a href='#'>{/**logo */}
                <div className='lg:text-6xl lg:p-[2%] hover:text-gray-700 mt-[3%] text-5xl '>
                    <FiShoppingBag />
                    <div className='font-semibold lg:ml-[5%] lg:text-5xl lg:mt-[-3.5%] ml-[10%] mt-[-9%]'>
                        SHOP
                        <h1 className='font-light'>
                            SMART
                        </h1>
                    </div>
                </div>
            </a>
            <div className='flex lg:justify-center lg:gap-[2%] lg:text-2xl lg:ml-[-30%] lg:mt-[-4.5%] justify-center ml-[28%] mt-[-4%] text-lg gap-[3%]'>{/**panel */}
                <a href='#' className='hover:text-purple-400'>
                    Category
                </a>
                <a href='#' className='hover:text-purple-400'>
                    Deals
                </a>
                <a href='#' className='hover:text-purple-400'>
                    What's New
                </a>
                <a href='#' className='hover:text-purple-400'>
                    Delivery
                </a>

            </div>
            <div className='flex lg:justify-center lg:mr-[-12%] lg:mt-[-2.1%] justify-center ml-[10%] mt-[-10%]'>
                <input
                    type="text"
                    placeholder="Search"
                    className="lg:w-64 lg:px-12 lg:py-2 border border-gray-300 rounded-full "
                />
                <a href='#' className='text-3xl lg:mt-[0.2%] hover:text-purple-400'>
                    <FiSearch />
                </a>
            </div>
            <div className='flex lg:justify-end  text-3xl lg:mr-[2%] lg:mt-[-3%] justify-end mt-[12%] mr-[2%]'>
                <FiUser className=' hover:text-purple-400' />
                <a href='#' className='text-lg lg:p-[1%] lg-gap-[1%] hidden md:block lg:mt-[-0.7%]  hover:text-purple-400'>
                    Account
                </a>
                <FiHeart className=' hover:text-purple-400' />
                <a href='#' className='text-lg lg:p-[1%] lg:mt-[-0.7%] hidden md:block hover:text-purple-400'>
                    Wishlist
                </a>
                <FiShoppingCart className=' hover:text-purple-400' />
                <a href='#' className='text-lg lg:p-[1%] lg:mt-[-0.7%] hidden md:block hover:text-purple-400'>
                    Cart
                </a>

            </div>


        </div>
    )
}

export default Ribbon
