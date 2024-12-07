import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";


const Deduction = () => {
    const navigate = useNavigate()

    
  return (
    <div className='px-3 mt-7 mb-8'>

<div className='flex w-[80%] font-extrabold text-xl items-center justify-between   mb-6'>
        <div className='size-[30px] bg-[#F3F3F3] flex justify-center items-center rounded-full'>
          <IoChevronBackSharp  className='text-[#787878] text-2xl'/>
          </div>
          <p onClick={()=>{navigate('/rider/orderdelivery')}}>My Deductions</p>
          </div>

          
          <div className='bg-[#FFF9B7] flex py-4 justify-between px-2 text-[#03120C] rounded-sm mb-5'>
                <div className=''>
                    
                    <p  >
                    <span className=' text-[#03120C] font-normal text-base block'>For Delaying order ID: 23499500</span>
                    <span className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>May 5, 2024</span></span>
                    
                    </p>
                </div>
                <p className='font-bold text-xl font-[Jakarta] italic flex flex-col'>
                    <span> ₦1,650</span>
                    <span className='font-normal text-sm'> Completed</span>
                    </p>


            </div>


            <div className='bg-[#FFF9B7] flex py-4 justify-between px-2 text-[#03120C] rounded-sm mb-5'>
                <div className=''>
                    
                    <p  >
                    <span className=' text-[#03120C] font-normal text-base block'>For Delaying order ID: 23499500</span>
                    <span className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>May 5, 2024</span></span>
                    
                    </p>
                </div>
                <p className='font-bold text-xl font-[Jakarta] italic flex flex-col'>
                    <span> ₦1,650</span>
                    <span className='font-normal text-sm'> Completed</span>
                    </p>


            </div>
            <div className='bg-[#FFF9B7] flex py-4 justify-between px-2 text-[#03120C] rounded-sm mb-5'>
                <div className=''>
                    
                    <p  >
                    <span className=' text-[#03120C] font-normal text-base block'>For Delaying order ID: 23499500</span>
                    <span className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>May 5, 2024</span></span>
                    
                    </p>
                </div>
                <p className='font-bold text-xl font-[Jakarta] italic flex flex-col'>
                    <span> ₦1,650</span>
                    <span className='font-normal text-sm'> Completed</span>
                    </p>


            </div>
            <div className='bg-[#FFF9B7] flex py-4 justify-between px-2 text-[#03120C] rounded-sm mb-5'>
                <div className=''>
                    
                    <p  >
                    <span className=' text-[#03120C] font-normal text-base block'>For Delaying order ID: 23499500</span>
                    <span className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>May 5, 2024</span></span>
                    
                    </p>
                </div>
                <p className='font-bold text-xl font-[Jakarta] italic flex flex-col'>
                    <span> ₦1,650</span>
                    <span className='font-normal text-sm'> Completed</span>
                    </p>


            </div>
            <div className='bg-[#FFF9B7] flex py-4 justify-between px-2 text-[#03120C] rounded-sm mb-5'>
                <div className=''>
                    
                    <p  >
                    <span className=' text-[#03120C] font-normal text-base block'>For Delaying order ID: 23499500</span>
                    <span className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>May 5, 2024</span></span>
                    
                    </p>
                </div>
                <p className='font-bold text-xl font-[Jakarta] italic flex flex-col'>
                    <span> ₦1,650</span>
                    <span className='font-normal text-sm'> Completed</span>
                    </p>


            </div>
    </div>
  )
}

export default Deduction