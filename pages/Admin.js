import Header_panel from '@/components/Header_panel'
import Location_dd from '@/components/Location_dd'
import Ribbon from '@/components/Ribbon'
import Top_picks from '@/components/Top_picks'
import AddCategory from '@/components/addCategory'
import React from 'react'

const Admin = () => {
  return (
    <div className='bg-white text-black fixed h-screen w-screen '>
      <Header_panel />
      <Location_dd />
      <Ribbon />
      <div>
       <h1 className='text-center font-semibold text-4xl pt-[4%]'>
        Admin panel
        </h1>
        
      </div>
      <AddCategory/>

    
    </div>
  )
}

export default Admin