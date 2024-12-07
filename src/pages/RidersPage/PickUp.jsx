import React from 'react'
import { useNavigate } from "react-router-dom";

const PickUp = () => {
    const navigate = useNavigate()

  return (
    <div className='mt-8 px-5'>
        <p className='font-bold text-xl text-[#011233] text-center mb-4 ' >Pick Up Delivery</p>

        <div className='bg-[#F6F6F6] w-[80%] mx-auto px-4 py-6 mb-[100px]'>
            <p className='font-semibold text-base mb-5'>Product Details</p>

            <div className='space-y-3'>
                <div className='text-base flex justify-between'>
                    <p className='text-[#555252] font-extralight '>item Name</p>
                    <p className='font-semibold text-[#011233]'>Headset</p>
                </div>
                <div className='text-base flex justify-between'>
                    <p className='text-[#555252] font-extralight '>Distance</p>
                    <p className='font-semibold text-[#011233]'>5OOmetres</p>
                </div>
                <div className='text-base flex justify-between'>
                    <p className='text-[#555252] font-extralight '>Security Pin</p>
                    <p className='font-semibold text-[#011233]'>983****</p>
                </div>
                <div className='text-base flex justify-between'>
                    <p className='text-[#555252] font-extralight '>Vendor's name</p>
                    <p className='font-semibold text-[#011233]'>LagBuy</p>
                </div>
                <div className='text-base flex justify-between'>
                    <p className='text-[#555252] font-extralight '>Buyer's name</p>
                    <p className='font-semibold text-[#011233]'>John Doe</p>
                </div>
                <div className='text-base flex justify-between'>
                    <p className='text-[#555252] font-extralight '>Fee</p>
                    <p className='font-semibold text-[#011233]'>500naira</p>
                </div>

            </div>
        </div>

        <button className="bg-[#11241D] text-white py-2  rounded-full w-full" onClick={()=>{navigate('/rider/deliverylocation')}}>Confirm Pick Up</button>

    </div>
  )
}

export default PickUp