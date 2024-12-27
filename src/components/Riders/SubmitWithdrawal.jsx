import React from 'react'
import { IoMdCheckmark } from "react-icons/io";


const SubmitWithdrawal = () => {
  return (
    <div className='bg-white shadow-lg w-[80%] py-4 mx-auto  rounded-md'>
        
        <div className=' size-7 bg-[#53E462] rounded-full mb-4 flex items-center justify-center mx-auto'>
        <IoMdCheckmark className='text-white'/>
        </div>
        <p className='text-[#011233] font-xl font-medium text-[18px] text-center mb-4 '>
        Withdrawal Submitted
        </p>
        <p className='text-[#03120C] text-[14px] text-center mb-4'>
        Your request has been submitted successfully
        </p>

        <div className=' flex justify-center'>
            <button className='bg-[#1A362B] text-white text-base font-medium py-2 px-3 rounded-md'>Dashboard</button>
        </div>
    


    </div>
  )
}

export default SubmitWithdrawal