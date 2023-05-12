import React from 'react'
import {HiMenuAlt2} from "react-icons/hi";
import {IoMdNotificationsOutline} from "react-icons/io";

function Header() {
  return (
    <div className='absolute w-full bg-[#151618] py-3'>
      <div className='flex justify-between items-center bg-[#151618]'>
        <div className='flex ml-36 gap-9 items-center bg-[#151618]'>
          <HiMenuAlt2 className='text-2xl bg-[#151618]'/>
          <h1 className='font-bold bg-[#151618]'>DIGITALIZATION LINE PRODUCTION</h1>
        </div>
        <div className='flex gap-7 bg-[#151618]'>
          <h2 className='bg-[#151618]'>Friday, 23 December 2022 <span className='bg-[#151618] font-bold'>| 11:21:01</span></h2>
          <IoMdNotificationsOutline className='text-2xl mr-5 bg-[#1D232C] rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default Header