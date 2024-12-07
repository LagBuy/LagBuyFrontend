import React from 'react'
import Ellipse1 from "../../assets/RiderImage/Ellipse 269.png"
import Ellipse2 from "../../assets/RiderImage/Ellipse 224.png"
import { FiArrowUpRight } from "react-icons/fi";

const OnlineDash = () => {
  return (
    <div>

        <div className='w-[90%] mx-auto'>
            <div className=' flex justify-between  mb-5'>
            <p className='text-[#1A362B] font-bold text-xl '>Orders</p>
            <button className='font-normal text-[15px] text-[#03120C]  underline'>See all</button>
            </div>

            <div className='bg-[#FFF9B7] flex py-3 justify-between px-3 text-[#03120C] rounded-full mb-5'>
                <div className='flex space-x-2'>
                    <img src={Ellipse1} alt="" />
                    <p >
                    <span className='font-medium text-base block '>Food Flask</span>
                    <span className='font-light text-[8px] '>May 8th, 2024 09:10</span>
                    
                    </p>
                </div>
                <p className='font-semibold text-xl'>₦4500</p>


            </div>

            <div className='bg-[#FFF9B7] flex py-3 justify-between px-3 text-[#03120C] rounded-full mb-5'>
                <div className='flex space-x-2'>
                    <img src={Ellipse2} alt="" />
                    <p >
                    <span className='font-medium text-base block '>Mobile Screen</span>
                    <span className='font-light text-[8px] '>May 8th, 2024 09:10</span>
                    
                    </p>
                </div>
                <p className='font-semibold text-xl'>₦4500</p>


            </div>



            <div className=' flex justify-between  mb-5'>
            <p className='text-[#1A362B] font-bold text-xl '>Recent Transactions</p>
            <button className='font-normal text-[15px] text-[#03120C]  underline'>See all</button>
            </div>

            <div className=' flex py-3 justify-between px-3 text-[#03120C]  mb-5'>
                <div className='flex space-x-2'>
                <div className='bg-[#A5A5A5] size-[30px] flex items-center justify-center rounded-full'>
                    <FiArrowUpRight className='text-2xl' />
                    </div>
 
                    <p >
                    <span className='font-medium text-base block '>Food Flask</span>
                    <span className='font-light text-[8px] '>Today 1:35pm</span>
                    
                    </p>
                </div>
                <p className='font-semibold text-xl'>+₦4500</p>


            </div>

            <div className=' flex  justify-between px-3 text-[#03120C]  mb-5'>
                <div className='flex space-x-2'>
                    <div className='bg-[#A5A5A5] size-[30px] flex items-center justify-center rounded-full'>
                    <FiArrowUpRight className='text-2xl' />
                    </div>
                    <p >
                    <span className='font-medium text-base block '>Spare part</span>
                    <span className='font-light text-[8px] '>Today 1:35pm</span>
                    
                    </p>
                </div>
                <p className='font-semibold text-xl'>+₦4500</p>


            </div>
    </div>

    </div>
  )
}

export default OnlineDash