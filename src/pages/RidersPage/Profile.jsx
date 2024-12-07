import React from 'react'
import { TfiBell } from "react-icons/tfi";
import Ellipse from "../../assets/RiderImage/Ellipse 224.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()

    
  return (
    <div>
        <div className='bg-[#11241D] py-8 mb-10'>
            <div className='flex  px-5 justify-between font-semibold text-2xl text-white'>
                <p>Profile</p>
        <TfiBell onClick={()=>{navigate('/rider/notification')}} />
        </div>
        </div>

        <div className='bg-[#FFF9B7] pl-5 py-5 w-[90%] mx-auto pr-4 rounded-[40px] mb-6'>

            <div className=' flex justify-between mb-4 items-start'>
                <div className='flex items-start space-x-2'>
                    <img src={Ellipse} />
                    <div>
                        <p className='font-semibold text-[18px]'>Achem Isreal</p>
                        <p className='text-[#E6E6E6] text-[14px]'>Rider ID: 757580</p>

                    </div>
                </div>

                <div className='  font-medium text-[12px] flex items-center text-[#11241D] mt-1'>
                    <p>Edit Details</p>
                    <IoIosArrowRoundForward  className='text-2xl'/>

                </div>

            </div>
            <div className='space-y-2'>

            <div className='font-semibold space-y-1'>
                <p className=' text-white  text-[18px]'> Email address</p>
                <p className='text-[#A5A5A5] text-[15px]'>abesintaiwo409@gmail.com</p>
            </div>

            <div className='font-semibold space-y-1'>
                <p className=' text-white  text-[18px]'> Phone Number</p>
                <p className='text-[#A5A5A5] text-[15px]'>0000000000000</p>
            </div>
            
            <div className='font-semibold space-y-1'>
                <p  className=' text-white  text-[18px]'> Role Type</p>
                <p className='text-[#A5A5A5] text-[15px]'>Full time</p>
            </div>

            
            <div className='font-semibold space-y-1'>
                <p className=' text-white  text-[18px]'> Distance Type</p>
                <p className='text-[#A5A5A5] text-[15px]'>Short</p>
            </div>
            

            
            <div className='font-semibold space-y-1'>
                <p className=' text-white  text-[18px]'>Location</p>
                <p className='text-[#A5A5A5] text-[15px]'>Ibadan</p>
            </div>

            
            <div className='font-semibold space-y-1'>
                <p className=' text-white  text-[18px]'> Required Days</p>
                <p className='text-[#A5A5A5] text-[15px]'>5hrs </p>
            </div>

            </div>



        </div>


    </div>
  )
}

export default Profile