import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()

    
    const [InputValues,setInputValues] =useState({Email:'' , Password:''})
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsPassword] = useState(false);


    const updateInput = (e)=>{
        const {value,name} =e.target
        setInputValues(prev=>({...prev,[name]:value}))

    }


  return (
    <section className='w-[90%] mx-auto font-[PlusJakarta]'>
        <div className='w-full flex justify-between mx-auto mt-10 mb-5'>
            <div className='bg-[#F3F3F3] size-[30px] rounded-full flex justify-center items-center'><IoIosArrowBack onClick={()=>{navigate('/rider/home')}} /></div>
            <h2 className='font- font-medium text-[22px] w-[80%]  text-center'>Login</h2>
        </div>
        <div className='text-left w-full mb-3'>
            <h3 className='font-medium  text-2xl mb-2'>Welcome back</h3>
            <p className='font-normal text-sm mb-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque natus veritatis temporibus nostrum necessitatibus</p>
        </div>
        <form action="" className='space-y-4 font-[inter]'>
            <label className='relative  block w-full  font-medium' >
            {!isFocusedEmail && !InputValues.Email&& (
                <span>

                <span className='absolute top-2 left-4 text-[12px] text-[#11241D] '>Email</span>
                <span className='block absolute top-4 left-4 text-[14px] text-[#11241D80] mt-3'>Lagbuy@gmail.com </span>
                </span>
                ) }
            <input type="email" name="Email"
                      onChange={updateInput}
                      onFocus={() => setIsFocusedEmail(true)}
                      onBlur={() => setIsFocusedEmail(false)}
            
            className='w-full   p-4 bg-[#FFF9B7] bordder-none rounded-2xl border-none outline-none'  value={InputValues.Email} />
            

            </label>

            <label className='relative  block w-full  font-medium' >
            {!isFocusedPassword && !InputValues.Password && (
                <span>

                <span className='absolute top-2 left-4 text-[12px] text-[#11241D] '>Password</span>
                <span className='block absolute top-4 left-4 text-[14px] text-[#11241D80] mt-3'> ********</span>
                </span>
                ) }
                
                
            <input type="password" name="Password"
                                  onChange={updateInput}
                                  onFocus={() => setIsPassword(true)}
                                  onBlur={() => setIsPassword(false)}
            className='w-full   outline-none px-4 py-4 bg-[#FFF9B7]  rounded-2xl mb-10'   value={InputValues.Password} />
            

            </label>
            <button className='bg-[#1A362B] w-full py-3  text-white rounded-3xl text-xl font-bold' onClick={()=>{navigate('/rider/dashboard')}}>Continue</button>

        </form>

    </section>
  )
}

export default Login