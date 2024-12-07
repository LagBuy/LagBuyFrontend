import React from 'react'
import { useNavigate } from 'react-router-dom';
import Package from "../../assets/RiderImage/package.png"


const Notification = () => {
    const navigate = useNavigate()
  return (
    <div className='mx-6'>
        <div className='h-[70vh] flex items-center w-[90%] mx-auto'>
            <div>
                <img src={Package} alt="" />

            </div>
        </div>
        <div className=' text-center mb-5'>
            <p className='font-bold text-2xl text-[#011233] mb-6'>Headset</p>
            <p className='font-normal text-sm '>Pick-up-Location: John Doe street, Lagbuy.</p>
            <p className='font-normal text-sm '>Delivery Location: John Doe street, Lagbuy.
            (2.5km)</p>

        </div>

        <div className='flex justify-between mb-10'>
            <button className='font-medium text-base bg-[#11241D] text-white px-7 py-1 rounded-full' onClick={()=>{navigate('/rider/meeting')}}>Accept</button>
            <button className='text-[#11241D] font-medium text-base bg-[#FFF9B7]  px-7 py-1 rounded-full'>Decline</button>
        </div>

    </div>
  )
}

export default Notification