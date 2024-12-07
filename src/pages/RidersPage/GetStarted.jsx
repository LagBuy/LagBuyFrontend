import React from 'react'
import Woman from "../../assets/RiderImage/youngwoman.png"
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className='w-[60%] mx-auto mt-11 mb-7'>
        <img src={Woman} className='w-full'/>
      </div>
      <div>
        <h1 className='font-bold text-xl text-center mb-3'>Distance equals Payment</h1>
        <div className='font-normal text-sm text-center mb-3'>
<p>1km=1,000 (naira)</p>
<p>2km=2,000(naira)</p>
<p>3km=3000(naira)</p>
</div>
      </div>
      <div className='space-y-3 w-[80%] mx-auto'>
        <button className='bg-[#1A362B] w-full py-2 text-white rounded-2xl' onClick = {()=>{navigate('/rider/register')}}>Get Started</button>
        <p className='text-[#1A362B] text-center'>Are you a rider of LagBuy?  <span className='cursor-pointer font-semibold text-[#1A362B]' onClick={()=>{navigate('/rider/login')}}>Login</span></p>
</div>
        
    </section>
  )
}

export default GetStarted