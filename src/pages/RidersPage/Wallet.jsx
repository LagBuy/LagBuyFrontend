import React from 'react'
import { RiWallet3Fill } from "react-icons/ri";
import FooterButtons from '../../components/Riders/FooterButtons';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";

const Wallet = () => {
  return (
    <div className=' w-[85%] mx-auto'>
        <div className='bg-[#11241D] text-white py-7 mt-6 px-5 rounded-2xl mb-10'>
            <div className='flex items-center text-2xl space-x-2 mb-3'> 
            <RiWallet3Fill className='text-[#FFF9B7]' />
                <p className='font-medium text-[22px] font-[inter]'>Available Balance</p>
                </div>
                <p className='font-bold text-3xl font-[Jakarta] mb-10'>₦450,000</p>
                
                <button className='bg-white w-full  py-3 rounded-full text-base font-bold text-[#11241D]'>Withdraw Money</button>
                
        </div>

        <div className='flex justify-between items-center mb-10'>
            <p className='font-[Jarkata] font-bold text-[14px]'>Transactions</p>
            <div className='bg-[#FFF9B7] flex items-center py-2  w-[70%] justify-between px-3 rounded-full'>
                <p>None</p>
                <IoIosArrowDown />
                

            </div>
        

        </div>
        <div className=' border border-[#11241D] py-2 rounded-[10px] flex justify-between items-center px-4 mb-6'>
                <p>My Deductions</p>
                <HiOutlineArrowRight />

            </div>

            
            <div className='bg-[#FFF9B7] flex py-4 justify-between px-3 text-[#03120C] rounded-sm mb-5'>
                <div className=''>
                    
                    <p  >
                    <span className=' text-[#03120C] font-medium text-[18px] block'>Delivery Rider Bonus</span>
                    <span className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>4:15am</span></span>
                    
                    </p>
                </div>
                <p className='font-bold text-xl font-[Jakarta]'>₦1,650</p>


            </div>

            <div className='bg-[#FFF9B7] flex py-4 justify-between px-3 text-[#03120C] rounded-sm mb-5'>
                
                    
                    <div className='w-[90%] '>
                    <p className=' text-[#03120C] font-medium text-[17px] mb-1 '>Total Bonus Withdrawable</p>
                    <p className='font-light text-[11px]  '>April 25th, 2024 <span className='pl-1'>4:15am</span></p>
                    
                    </div>
                
                <p className='font-bold text-xl font-[Jakarta]'>₦23,300</p>


            </div>



 
<FooterButtons/>

    </div>
  )
}

export default Wallet