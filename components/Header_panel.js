import React from 'react'
import { FiFacebook, FiHelpCircle, FiInstagram, FiPhone, FiSearch, FiSmartphone, FiTwitter } from 'react-icons/fi'

const Header_panel = () => {
    return (
    <div>
        <div className='bg-pink-200 lg:w-screen lg:h-9 '>
            <div className='lg:ml-[5%] hover:text-blue-500 text-xl lg:mb-[-5%] p-[0.5%]'>
                <FiPhone />
            </div>
            <div className=' hover:text-blue-400'>
                <h1 className='lg:ml-[7%] lg:mt-[3.5%] ml-[5%] mt-[-3.5%]'>
                    <a href='#'>
                        +0000000000
                    </a>
                </h1>
            </div>
            <div className='flex lg:justify-center lg:mt-[-1.5%] justify-center'> 
                <a href='#' className='hover:text-blue-500'>
                Get 50% off on selected items | Shop Now
                </a>
            </div>
        </div>
    </div >
  )
}

export default Header_panel