import Header_panel from '@/components/Header_panel'
import Location_dd from '@/components/Location_dd'
import Ribbon from '@/components/Ribbon'
import Top_picks from '@/components/Top_picks'
import React from 'react'

const index = () => {
  return (
    <div className='bg-white text-black fixed '>
      <Header_panel/>
      <Location_dd/>
      <Ribbon/>
      <Top_picks/>
    </div>
  )
}

export default index