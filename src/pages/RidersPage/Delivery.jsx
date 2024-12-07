import React from 'react'
import { FaBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import location from "../../assets/RiderImage/Vector.png"
import { IoIosArrowRoundForward } from "react-icons/io";


const Delivery = () => {
  return (
    <div className='mx-4'>
      
<div className=' flex justify-between mt-5 items-center mb-6'>

<div className='flex space-x-4 items-center'>
<div className='bg-[#F3F3F3] size-[40px] rounded-full flex justify-center items-center'><IoIosArrowBack className='font-extrabold text-2xl text-[#787878]' /></div>
<p className='font-bold text-[22px]'>Deliveries</p>
</div>

<FaBell  className='font-bold text-2xl text-[#03120C]'  onClick={()=>{navigate('/rider/delivery')}}/>

</div>


<div className='bg-[#FFF9B7] flex  text-[#03120C] mb-8 py-2 rounded-full w-[60%] mx- justify-between px-5 items-center '>
<p className='font-medium text-base'>Today</p>
<IoIosArrowDown className=' cursor-pointer' />
</div>



 <div className='bg-[#FFF9B7] pt-3 px-3 rounded-[40px] mb-8 pb-8'>
               <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-1 mb-1 w-[85%] mx-auto'>
            <IoMdCart className='text-[#11241D]' />
            <p className='font-semibold text-[22px] text-[#03120C]'>Order</p>
            </div>
            <IoIosArrowRoundForward className='font-medium text-2xl'/>

            </div>
            <p className='font-medium text-2xl text-[#03120C]   w-[85%] mx-auto mb-2'>0
   <span className='text-sm '>Kilometer</span>
            </p>
             <div className='w-[85%] bg-white mx-auto  rounded-lg mb-4 flex px-10 items-center space-x-10'>
                <div className='bg-[#1A362B] size-2 rounded-full'></div>
                <div className='bg-[#1A362B] size-2 rounded-full'></div>



             </div>



             

        </div>

        <div className='bg-[#FFF9B7] pt-3  pb-8 px-4 rounded-[40px] mb-[150px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-1 mb-1 w-[85%] mx-auto'>
            <img src={location} alt="" />
            <p className='font-semibold text-[22px] text-[#03120C]'>Distances</p>

            </div>

            <IoIosArrowRoundForward className='font-medium text-2xl'/>

</div>
            <p className='font-medium text-2xl text-[#03120C]   w-[85%] mx-auto mb-2'>0
   <span className='text-sm '>Kilometer</span>
            </p>

            <div className='w-[85%] bg-white mx-auto  rounded-lg mb-4 flex px-10 items-center space-x-10'>
                <div className='bg-[#1A362B] size-2 rounded-full'></div>
                <div className='bg-[#1A362B] size-2 rounded-full'></div>



             </div>




             

        </div>




    </div>
  )
}

export default Delivery