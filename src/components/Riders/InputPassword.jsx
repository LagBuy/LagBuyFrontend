import React, { useState,useRef } from 'react'


const InputPassword = () => {
    
  const [inputs, setInputs] = useState(Array(4).fill(''));
  const inputRefs = useRef([]);


  const handleChange =(e,index)=>{
    const {value} = e.target
    const  newInputs = [...inputs]
    newInputs[index] =value;
    setInputs(newInputs)
 
    if (value && index < inputRefs.current.length - 1) {
     inputRefs.current[index + 1].focus();
     inputRefs.current[index].blur();
     inputRefs.current[index + 1].style.borderColor =" black"
     inputRefs.current[index + 1].style.borderWidth =" 2px"
     inputRefs.current[index].style.borderColor ="grey "
 
   }
 
   }
 
   const handleKeyPress = (e, index) => {
     if (e.key === 'Backspace' && index > 0 && !inputs[index]) {
       // Move focus to the previous input field on backspace if the current input is empty
       inputRefs.current[index - 1].focus();
       inputRefs.current[index - 1].style.borderColor =" black"
       inputRefs.current[index - 1].style.borderWidth =" 2px"
       inputRefs.current[index].style.borderColor =" grey  "
     }
   };
   console.log(inputs)
  return (
    <div className='bg-[#FFF9B7] w-[80%] mx-auto py-4 rounded-md'>
        <p className='text-[#011233] text-xl px-5 font-bold mb-3'>Withdraw Money</p>
        <form className=''>
            <div className=' w-[85%] mx-auto mb-4'>
            <p className='text-[#011233] text-sm mb-1 font-medium'>Amount to withdraw</p>
            <div className='w-full flex'>
                <span className='bg-[rgba(26,54,43,0.5)] py-1 rounded-l-sm  text-white px-4'> ₦</span>
            <input type="text" className='bg-[#F3F3F3] py-1 rounded-sm'  />
            </div>
            <p className='text-[12px] font-medium'>Amount will be sent to your bank account</p>
            </div>

            <div className=' w-[60%] mx-auto mb-5'>
                <p className='font-xl font-medium'>Enter Pin</p>
                <div className=' flex space-x-4 '>
      {inputs.map((input,index)=>{
        return <input type="number" maxLength={1} 
        onKeyDown={(e) => handleKeyPress(e, index)}
        onChange={(e)=>{handleChange(e,index)}}
        ref={(ref) => {
          inputRefs.current[index] = ref;
        }}
       
        className='size-[35px] transition text-center   rounded-md bg-[rgba(26,54,43,0.5)]  outline-none'
        
        />
        
      })}
     </div>
    
 

            </div>

            <div className='w-[85%] mx-auto'>
              <button className=' bg-[#11241D] w-full py-2 rounded-full text-white font-normal text-[18px]'>Withdraw Money</button>
            </div>
        </form>


    </div>
  )
}

export default InputPassword