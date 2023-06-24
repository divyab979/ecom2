import Header_panel from '@/components/Header_panel'
import Location_dd from '@/components/Location_dd'
import Product_cards from '@/components/Product_cards'
import Ribbon from '@/components/Ribbon'
import Top_picks from '@/components/Top_picks'
import Tp_Heading from '@/components/Tp_Heading'
import React from 'react'

const index = () => {
  return (
    <div className='bg-white text-black min-h-full mx-auto '>
      <Header_panel />
      <Location_dd />
      <Ribbon />
      <div >
        <h1 className='font-semibold text-center pt-16 text-4xl hover:underline'>Categories</h1>
        <Top_picks />
      </div>
      {/* <Product_cards/> */}

    
    </div>
  )
}

export default index