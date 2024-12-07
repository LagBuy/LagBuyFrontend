import React from 'react'
import { useNavigate } from "react-router-dom";
import Map from "../../assets/RiderImage/Map.png"

const DeliveryLocation = () => {
    const navigate = useNavigate()
  return (
    <div>

        <div>
            <img src={Map} alt="" />
        </div>

        <div className='bg-[#FFF9B7] text-[#011233] px-6 py-6'>
            <p className='font-semibold  text-xl  mb-3'>Deliver to Location </p>
            <p className='font-normal text-sm mb-3'>LOCATION: John Doe Road, Bariga, Lagos.</p>
            <p className='font-light text-sm mb-10'>
Check the pin on the map to highlight the correct door
or entrance to meet the customer.</p>

<button className="bg-[#11241D] text-white py-2 px-3 rounded-full w-full" onClick={()=>{navigate('/rider/deliverydone')}}>Complete</button>

        </div>
    </div>
  )
}

export default DeliveryLocation