import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import Bike from "../../assets/RiderImage/electric bike.png"
import FooterButtons from '../../components/Riders/FooterButtons'
import { useState } from 'react';
import OrderDetails from './OrderDetails';



const OrderDelivery = () => {

  const[showCompletedOrders,setCompletedOrder] = useState(true)



    const navigate = useNavigate()
  return (
    <div className=' px-3  '>

        
<div className=' flex justify-between mt-5 items-center mb-6'>

<div className='flex space-x-4 items-center'>
<div className='bg-[#F3F3F3] size-[40px] rounded-full flex justify-center items-center'><IoIosArrowBack className='font-extrabold text-2xl text-[#787878]' /></div>
<p className='font-bold text-[22px]'>Orders</p>
</div>

<FaBell  className='font-bold text-2xl text-[#03120C]'  onClick={()=>{navigate('/rider/delivery')}}/>

</div>

<div className='bg-[#FFF9B7] flex  text-[#03120C] mb-8 py-2 rounded-full w-[60%] mx- justify-between px-5 items-center '>
<p className='font-medium text-base'>Today</p>
<IoIosArrowDown className=' cursor-pointer' />
</div>


<div className='bg-[#F1F1F1] py-2 rounded-xl px-4 flex justify-between gap-5  mb-10'>
            <button className={` ${showCompletedOrders?"text-[#11241D]":"bg-[#11241D] text-white py-3 px-2 rounded-[10px] font-bold text-[14px]"}`} onClick={()=>{setCompletedOrder(false)}}>Cancelled Orders</button>
            <button  onClick={()=>{setCompletedOrder(true)}} className={` ${showCompletedOrders?"bg-[#11241D] text-white py-3 px-2 rounded-[10px] font-bold text-[14px]" :"text-[11241D]"}`}>Completed Orders</button>

        </div>

        
{showCompletedOrders? 
<div>

        <OrderDetails/>


        <div className=' w-[90%] mx-auto h-[85vh]  flex justify-center items-center'>
            <div>
            <img src={Bike} alt="" />
            <p className='font-semibold text-[18px] text-[#03120C] text-center mb-10'>No Completed Order</p>
            </div>
        </div>
        </div>
        :
        <div className='h-[80vh] flex justify-center items-center' >
        <p>Cancelled Orders</p>
        </div>
}
        <FooterButtons/>
        


    </div>
  )
}

export default OrderDelivery