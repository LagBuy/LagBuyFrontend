import React from 'react'
import PersonalDetails from "../../components/Riders/PersonalDetails"
import VehicleDetails from '../../components/Riders/VehicleDetails'
import { useState } from 'react'
import {RegisterProvider} from '../../components/Riders/RegisterProvider'
 import BankDetails from '../../components/Riders/BankDetails'
 import FaceDetails from '../../components/Riders/FaceDetails'
 import { IoChevronBackSharp } from "react-icons/io5";
 import { useNavigate } from 'react-router-dom';


 

const RegConsume=()=>{

  const navigate = useNavigate()
  const TotalPages =4
  const [Currentform,setCurrentForm] = useState(1)

  const stepWidth = 100 / TotalPages; // Width percentage of each step
  const indicatorPosition = (Currentform-1) * stepWidth; // Position of the indicator


  const PageName = Currentform==1? "Personal Details":Currentform==2? "Vehicle Details":Currentform==3 ? "Bank Details": Currentform==4 ?"Face Aunthentication" : ""


  const NextPage =()=>{
    if(Currentform<TotalPages) {
      setCurrentForm(prev=>(prev+1))
    }
    else{}

  }
  const PrevPage =()=>{
    if(Currentform !==1 ){
      setCurrentForm(prev=>(prev-1))
 

    }

    else if (Currentform ==1){
      navigate("/rider/home")

    }
    else{}
  }

    return (
        <div className='w-full mx-auto mb-8 mt-4'>
          <div className=' flex   justify-between w-[95%] mx-auto'>
            <div className='size-[30px] bg-[#F3F3F3] flex justify-center items-center rounded-full'>
          <IoChevronBackSharp onClick={PrevPage} className='text-[#787878] text-2xl'/>
          </div>
            <div className='w-[60%]'>
              <p className='font-semibold text-[19px] font-[inter] text-[#11241D] mt-2 text-center mb-2'>{PageName}</p>

              <div className="w-full  max-w-xl mb-8 relative">
        {/* Base Layer */}
        <div className="h-3 bg-[#FFF9B7] rounded-full relative">
          {/* Indicator */}
          <div
            className="absolute top-0 h-3 bg-[#11241D] rounded-full transition-all"
            style={{
              left: `${indicatorPosition}%`,
              width: `${stepWidth}%`,
            }}
          ></div>
        </div>

      </div>
            </div>
            <p className='text-[#1A362B] font-normal text-sm '> step {Currentform}/{TotalPages}</p>
          </div>
          <div className='w-[90%] mx-auto'>
          {Currentform==1 &&<PersonalDetails/>}
          {Currentform==2 &&<VehicleDetails/>}
          {Currentform==3 &&<BankDetails/>}
          {Currentform==4 &&<FaceDetails/>}

            <button className='bg-[#1A362B] w-full py-3  text-white rounded-3xl text-xl font-bold' onClick={NextPage}>Next</button>
            </div>
       
     </div> )
}




const Register = () => {
  return (
    <RegisterProvider>

        <RegConsume/>

 </RegisterProvider>

  )
}
export default Register

