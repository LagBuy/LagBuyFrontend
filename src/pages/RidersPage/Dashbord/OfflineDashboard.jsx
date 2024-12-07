import React from 'react'
import Rafiki from "../../../assets/RiderImage/rafiki.png"
import Ellipse from "../../../assets/RiderImage/Ellipse 224.png"
import { useNavigate } from "react-router-dom";

const OfflineDashboard = () => {
    const navigate = useNavigate()


  return (
    <div>
        <div className='w-[90%] mx-auto flex justify-between mt-6 mb-11'>
            <div className='flex flex-col font-[DM]'>
                <span className='font-medium text-[18px] '>Hi John Doe,</span>
                <span className='text-[#1A362B] font-bold text-2xl'>Welcome</span>
            </div>
            <div>
                <img src= {Ellipse} alt="" />
            </div>

        </div>
        <div className='w-[90%] mx-auto mb-8 '>
            <img src={Rafiki} alt="" className='w-full' />
        </div>

        <div className='flex w-[90%] mx-auto justify-between font-[PlusJakarta] items-center'>
            <div className='flex flex-col'>
                <span className='font-semibold text-[25px]'>Status: Offline</span>
                <span className='font-light text-[15px] mt-[-10px]'>Tap to go online</span>
            </div>

            <div>
                <div className='bg-[#D9D9D9] w-10 h-4 rounded-2xl relative'>
                <div className='bg-white w-4 h-4 rounded-full absolute top-0' onClick={()=>{navigate("/rider/onlinedashboard")}}></div>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default OfflineDashboard