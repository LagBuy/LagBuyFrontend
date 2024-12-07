import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import location from "../../assets/RiderImage/Vector.png"
import FooterButtons from '../../components/Riders/FooterButtons';

const Insights = () => {
  return (

    <div>
    <div className='font-[Jarkata] w-[90%] mx-auto '>
        
        <div className=' flex justify-between mt-5 items-center mb-6'>

            <div className='flex space-x-4 items-center'>
        <div className='bg-[#F3F3F3] size-[40px] rounded-full flex justify-center items-center'><IoIosArrowBack className='font-extrabold text-2xl text-[#787878]' /></div>
         <p className='font-bold text-[22px]'>Insights</p>
        </div>
        
        <FaBell  className='font-bold text-2xl text-[#03120C]'/>

        </div>

        <div className='bg-[#FFF9B7] flex  text-[#03120C] mb-8 py-2 rounded-full w-[60%] mx- justify-between px-5 items-center '>
            <p className='font-medium text-base'>Today</p>
            <IoIosArrowDown className=' cursor-pointer' />
        </div>


        <div className='bg-[#FFF9B7] py-3 px-1 rounded-[40px] mb-8'>
            <div className='flex items-center space-x-1 mb-1 w-[85%] mx-auto'>
            <IoMdCart className='text-[#11241D]' />
            <p className='font-semibold text-[22px] text-[#03120C]'>Order</p>

            </div>
            <p className='font-medium text-[11px] text-[#03120C]  w-[85%] mx-auto mb-2'>Your total of number of delivered compared to other rides</p>
             <div className='w-[85%] bg-[#11241D] mx-auto pt-1 rounded-lg mb-4'></div>


             <div className='flex justify-between font-medium w-[80%] mx-auto'>
                <p className=''>
                    <span className=' text-[13px] #03120C block'>Today</span>
                    <span className='text-[32px] text-[#11241D]'>0</span>
                </p>
                <p>
                    <span className=' text-[13px] #03120C block'>Average</span>
                    <span className='text-[32px] text-[#11241D]'>5</span>
                </p>
             </div>


             

        </div>

        <div className='bg-[#FFF9B7] py-3 px-1 rounded-[40px] mb-[150px]'>
            <div className='flex items-center space-x-1 mb-1 w-[85%] mx-auto'>
            <img src={location} alt="" />
            <p className='font-semibold text-[22px] text-[#03120C]'>Distances</p>

            </div>
            <p className='font-medium text-[11px] text-[#03120C]  w-[85%] mx-auto mb-2'>Your distance covered compared to other rides</p>
             <div className='w-[85%] bg-[#11241D] mx-auto pt-1 rounded-lg mb-4'></div>


             <div className='flex justify-between font-medium w-[80%] mx-auto'>
                <p className=''>
                    <span className=' text-[13px] #03120C block'>Today</span>
                    <span className='text-[32px] text-[#11241D]'>0<span className='text-xl'>km</span></span>
                </p>
                <p>
                    <span className=' text-[13px] #03120C block'>Average</span>
                    <span className='text-[32px] text-[#11241D]'>5<span className='text-xl'>km</span></span>
                </p>
             </div>


             

        </div>
        <FooterButtons/>


    </div>
    </div>
  )
}

export default Insights