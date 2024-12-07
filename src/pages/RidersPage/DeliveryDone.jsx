import React from 'react'
import DeliveryMann from "../../assets/RiderImage/delivery.png"

const DeliveryDone = () => {
  return (
    <div className=''>
        <div className='w-[40%] mx-auto mt-6 '>
            <img src={DeliveryMann} alt="" className='w-full' />
        </div>
        <div className='text-[#011233] text-center px-3 mb-6'>
            <p className='text-xl font-bold mb-3'>Delivery Completed</p>
            <p className='font-normal text-sm mb-8'>Side mirror of 51 inches size has been delivered
 to Mr. John Doe who stays at
 Sparedech Road, Bariga, Lagos</p>

 <button className="bg-[#11241D] text-white py-2 px-3 rounded-full w-full">Confirm Payment</button>

        </div>
    </div>
  )
}

export default DeliveryDone