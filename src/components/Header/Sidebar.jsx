import React from 'react'

import {RxDashboard} from "react-icons/rx"
import {BiDetail} from "react-icons/bi"
import {GrHostMaintenance} from "react-icons/gr"
import {MdOutlineLibraryBooks} from "react-icons/md"
import {AiOutlineFieldTime} from "react-icons/ai"
import {GrUserManager} from "react-icons/gr"
import {BiUser} from "react-icons/bi";
import {AiFillSetting} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import Header from "./Header";
import PieChart from "../Hero/PieChart";


function Sidebar() {
  return (
    <div>
      <Header />
      <PieChart />
      <div className='relative border-r-[2px] border-black h-screen w-[110px] flex flex-col items-center justify-around bg-[#151618]'>
        <h1 className='text-3xl bg-[#151618] text-blue-700 font-bold'>F.C.C</h1>
        <div className='bg-[#151618]'>
          <ul className='flex flex-col gap-2 bg-[#151618]'>
            <li className='text-center text-sm bg-[#151618]'><RxDashboard className='text-2xl mx-auto' /> Dashboard</li>
            <li className='text-center text-sm bg-[#151618]'><BiDetail className='text-2xl mx-auto bg-[#151618]' />Detail</li>
            <li className='text-center text-sm bg-[#151618]'><GrHostMaintenance className='text-2xl mx-auto bg-white'/>Maintenance</li>
            <li className='text-center text-sm bg-[#151618]'><MdOutlineLibraryBooks className='text-2xl mx-auto bg-[#151618]'/>MasterData</li>
            <li className='text-center text-sm bg-[#151618]'><AiOutlineFieldTime className='text-2xl mx-auto bg-[#151618]'/>Activity user</li>
            <li className='text-center text-sm bg-[#151618]'><GrUserManager className='text-2xl mx-auto bg-white'/>Management User</li>
            <li className='text-center text-sm bg-[#151618]'><BiUser className='text-2xl mx-auto bg-[#151618]'/>Account</li>
            <li className='text-center text-sm bg-[#151618]'><AiFillSetting className='text-2xl mx-auto bg-[#151618]'/>Setting</li>
          </ul>
        </div>
        <div className='flex bg-[#151618]'><BiLogOut className='text-2xl bg-[#151618]'/>Logout</div>
      </div>
    </div>
  )
}

export default Sidebar