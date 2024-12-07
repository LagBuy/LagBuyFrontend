import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import  Mirror1 from "../../assets/RiderImage/Rectangle3006.png";
import  Mirror2 from "../../assets/RiderImage/Rectangle3005.png";
import { CiViewList } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";


const OrderDetails = () => {
  return (
    <div className='px-5 mt-7 mb-4'>
        <div className='flex w-[70%] font-extrabold text-xl items-center  space-x-5 mb-6'>
        <div className='size-[30px] bg-[#F3F3F3] flex justify-center items-center rounded-full'>
          <IoChevronBackSharp  className='text-[#787878] text-2xl'/>
          </div>
          <p>Order Details</p>
          </div>

          <div className='w-full  flex   space-x-5 mb-6'>
            <div>
            
                <img src={Mirror1} alt="" />
                </div>
                <div>
                <img src={Mirror2} alt="" />
                </div>
                </div>


                   <div className='bg-[#FFF9B7] py-4 px-3 space-y-3 rounded-[7px] mb-7 ' >
                    <div className='flex items-center space-x-2'>
                    <CiViewList />
                    <p>Product</p>
                   </div>
                   <div className='text-base'>
                    <p className=' font-normal text-[#63676E]'>Product Name</p>
                    <p className='font-semibold'>Side Mirror</p>
                   </div>
                   <div className='text-base'>
                    <p className=' font-normal text-[#63676E]'>OrderDate</p>
                    <p className='font-semibold'>May 07, 2025</p>
                   </div>
                   <div className='text-base'>
                    <p className=' font-normal text-[#63676E]'>Security Pin</p>
                    <p className='font-semibold'>123</p>
                   </div>
                   </div>

                   
                <div className='bg-[#FFF9B7] py-4 px-3 space-y-3 rounded-[7px] text-base mb-6' >
                    <div className='flex items-center space-x-2 text-[#63676E]'>
                    <IoLocationOutline />
                    <p>Delivery Information</p>
                   </div>

                   <div className='border-b border-[#ACACAC] py-2'>
                    <p className=' font-normal text-[#63676E]'>Pick up Location</p>
                    <p className='font-semibold '>24, John Doe Estate, John Street, Yaba, Lagos</p>
                   </div>
                   <div className='border-b border-[#ACACAC] py-2'>
                    <p className=' font-normal text-[#63676E] '>Delivery Address</p>
                    <p className='font-semibold'>123, off John Doe Street, Alagomeji, Onipan</p>
                   </div>
                   
                   </div>

                   <div className='bg-[#FFF9B7] py-4 px-3 space-y-3 rounded-[7px] text-base mb-8' >
                    <div className='flex items-center space-x-2 text-[#63676E]'>
                    <IoLocationOutline />
                    <p>Order Summary</p>
                   </div>

                   <div className='border-b border-[#ACACAC] py-2 flex justify-between'>
                    <p className=' font-normal text-[#63676E]'>Price</p>
                    <p className='font-semibold '>₦4500</p>
                   </div>
                   <div className='border-b border-[#ACACAC] py-2 flex justify-between'>
                    <p className=' font-normal text-[#63676E] '>Mode of delivery</p>
                    <p className='font-semibold text-sm'>Motorcycle</p>
                   </div>
                   
                   </div>


                   <div className='relative' >

                    <div className='w-[2px] h-[125px] bg-[#D5D5D5]  absolute top-[60px] left-[10px] -z-30 '></div>
                    <p className='mb-8'>Timeline</p>
                    <div className='flex items-center  text-[#63676E] space-x-5 mb-10'>
                        <div className='bg-[#11241D] size-[20px] flex justify-center items-center rounded-full '>

                        <IoIosCheckmark className='text-white text-xl'  />
                        </div>
                    
                    <p className='text-[#63676E]'>Awaiting Pick-up</p>
                   </div>


                   <div className='flex items-center  text-[#63676E] space-x-5  mb-10'>
                        <div className='bg-[#11241D] size-[20px] flex justify-center items-center rounded-full'>

                        <IoIosCheckmark className='text-white text-xl'  />
                        </div>
                    
                    <p>Picked up by Rider</p>
                   </div>

                   
                   <div className='flex items-center  text-[#63676E] space-x-5  mb-10'>
                        <div className='bg-[#11241D] size-[20px] flex justify-center items-center rounded-full '>

                        <IoIosCheckmark className='text-white text-xl'  />
                        </div>
                    
                    <p className='text-[#1B1B1B]'>Package Delivered</p>
                   </div>
                   <p className='text-base font-light'>The customer’s package has been delivered.</p>

                   
                   </div>



    </div>
  )
}

export default OrderDetails