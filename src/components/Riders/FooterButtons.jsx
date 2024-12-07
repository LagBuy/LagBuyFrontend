import React from 'react'
import { MdOutlineInsights } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { BsFilterSquare } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import { MdPayment } from "react-icons/md";


const FooterButtons = () => {
  const navigate = useNavigate()
  return (
    <div className='flex text-[#1A362B] bg-[#DADADA] py-2 rounded-full w-[95%] mx-auto justify-around mb-5'>
        
        <div className=' cursor-pointer space-y-1'>
        <MdHomeFilled  className='text-2xl'/>
        <p className='font-medium text-[13px]'>Home</p>
        </div>

        <div onClick ={()=>{navigate("/rider/insights")}} className=' cursor-pointer space-y-1'>
        <MdOutlineInsights className='text-2xl' />
        <p className='font-medium text-[13px]'>Insight</p>
        </div>
        <div onClick={()=>{navigate("/rider/wallet")}} className='cursor-pointer space-y-1'>
        <RiWallet3Fill className='text-2xl' />
        <p className='font-medium text-[13px]'>Wallet</p>
        </div>

        <div className='space-y-1 cursor-pointer ' onClick={()=>{navigate("/rider/orders")}}>
        <BsFilterSquare className='text-2xl ' />
        <p className='font-medium text-[13px]'>Orders</p>

        </div>

        
        <div className='space-y-1 cursor-pointer' onClick={()=>{navigate("/rider/withdraw")}}>
        <MdPayment className='text-2xl '  />
        <p className='font-medium text-[13px]'>Withdraw</p>

        </div>



        


    </div>
  )
}

export default FooterButtons