import React, { useContext, useState } from 'react'

import {RegContext} from "./RegisterProvider"

const inputFields = [
  { name: 'firstname', type: 'text', placeholder: 'First Name', sample: 'John' },
  { name: 'lastname', type: 'text', placeholder: 'Last Name', sample: 'Doe' },
  { name: 'phonenumber', type: 'tel', placeholder: 'Phone Number', sample: '******' },
  { name: 'phonenumber2', type: 'tel', placeholder: 'Alternative Phone Number', sample: '*******' },
  { name: 'email', type: 'email', placeholder: 'Email Address', sample: 'Lagbuy@gmail.com' },
  { name: 'nin', type: 'text', placeholder: 'NIN Code', sample: '***********' },
  { name: 'nextofkin', type: 'text', placeholder: 'Next of Kin', sample: 'Son' },
  { name: 'nextofkinphone', type: 'tel', placeholder: 'Next of Kin Phone Number', sample: '07054996****8' },]


  


const egisterDetails = {
  firstname:"",
  lastname:"",
  phonenumber: "",
  phonenumber2 :"",
  email:"",
  nin: "",
  nextofkin:"",
  nextofkinphone:"",
  motorcyletype: "",
  motorcylebrand : "",
  platenumber:" ",
  firstguarantorname: " ",
  firstguarantorPhonnumber : " ",
  secondguarantorname: " ",
  firstguarantorphonenumber: " ",
  bankname :"",
  accountnumber:" ",
  accountname:""



}



const PersonalDetails = () => {
  const  {registerDetails,setRegisterDetails} = useContext(RegContext)

  


  const updateInput = (e)=>{
      const {value,name} =e.target
      setRegisterDetails(prev=>({...prev,[name]:value}))

  }
  return (
    <div className='mt-10  w-[90%] mx-auto font-[inter] font-medium '>
      <div className='space-y-4 mb-5'>

      {
        inputFields.map(({name,type,placeholder,sample},index)=>{
          console.log(index)

          const [isFocused, setIsFocused] = useState(false);

          return(
            
<label className='relative  block w-full  font-medium' key={index} >
                  {!isFocused && !registerDetails[name]&& (
                <span>

                <span className='absolute top-2 left-4 text-[10px] text-[#11241D] '>{placeholder}</span>
                <span className='block absolute top-4 left-4 text-[14px] text-[#11241D80] mt-3'>{sample}  </span>
                </span>
                ) }
            <input type={type} name={name}
                      onChange={updateInput}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
            
            className='w-full   p-4 bg-[#FFF9B7] bordder-none rounded-2xl border-none outline-none'  value={registerDetails[name]} />
            

            </label>
            
          )

        })
      }

</div>    

      
    </div>
  )
}

export default PersonalDetails

