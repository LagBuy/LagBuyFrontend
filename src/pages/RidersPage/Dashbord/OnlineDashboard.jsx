import React from 'react'
import Ellipse from "../../../assets/RiderImage/Ellipse 224.png"
import Bike from "../../../assets/RiderImage/electric bike.png"
import FooterButtons from '../../../components/Riders/FooterButtons'
import OnlineDash from '../../../components/Riders/OnlineDashboard'
import { useNavigate } from "react-router-dom";



const OnlineDashboard = () => {

    const navigate = useNavigate()
  return (
    <div>
        <div className='bg-[#11241D] font-[PlusJakarta] mb-4'>
            <div className=' flex w-[90%] mx-auto justify-between mb-4 pt-5 pb-2'>
            <div className='flex flex-col'>
                <span className='text-white font-bold text-2xl '>John Doe</span>
                <span className='text-[#FFF9B7] font-normal text-[14px]'>You are Online</span>
            </div>

            <div className='bg-[#44FF40] w-10 h-4 rounded-2xl relative mt-2'>
                <div className='bg-white w-4 h-4 rounded-full absolute top-0' onClick={()=>{navigate("/rider/dashboard")}}></div>
                </div>
                </div>


                <div className='flex w-[90%] justify-between mx-auto '>
                    <div className='text-white flex flex-col'>
                        <span className='font-normal text-xl mb-[-10px] '>  Your Earnings</span>
                        <span className='font-bold text-[40px]'>₦0,000</span>
                    </div>
                    <div>
                        <img src={Ellipse} alt=""  onClick={()=>{navigate("/rider/profile")}}/>
                    </div>


                </div>

        </div>

        <div className='w-[90%] mx-auto bg-[#F1F1F1] py-2 rounded-xl flex justify-center gap-5  mb-10'>
            <button className='text-[#11241D]'>Pending Orders</button>
            <button className='bg-[#11241D] text-white py-2 px-2 rounded-[10px] font-bold text-[14px]' >Active Orders</button>

        </div>
        <div className=' w-[90%] mx-auto h-[85vh]  flex justify-center items-center'>
            <div>
            <img src={Bike} alt="" />
            <p className='font-semibold text-[18px] text-[#03120C] text-center mb-10'>No Completed Order</p>
            </div>
        </div>
        <OnlineDash/>
        <FooterButtons/>
    </div>
  )
}

export default OnlineDashboard