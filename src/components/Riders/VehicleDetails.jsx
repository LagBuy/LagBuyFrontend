import React, { useContext, useState ,useRef} from 'react'
import {RegContext} from "./RegisterProvider"



const inputFields = [
    { name: 'motorcycletype', type: 'text', placeholder: 'Motorcycle Type', sample: 'Motor' },
    { name: 'motorcylebrand', type: 'text', placeholder: 'Motorcycle Brand', sample: 'e.g Honda' },
    { name: 'platenumber', type: 'text', placeholder: 'Plate Number', sample: '******' },
    { name: 'firstguarantorname', type: 'text', placeholder: 'Guarantor 1 Name', sample: 'Kehinde' },
    { name: 'firstguarantorPhonenumber', type: 'tel', placeholder: 'Guarantor 1 Phone Number ', sample: '07054996****8' },
    { name: 'secondguarantorname', type: 'text', placeholder: 'Guarantor 2 Name', sample: 'Emily Brown' },
    { name: 'secondguarantorphonenumber', type: 'tel', placeholder: 'Guarantor 2 Phone Number ', sample: '08045******7' },
      ]

      

const VehicleDetails = () => {

  const inputRefs = useRef(inputFields.map(() => useRef(null)));
  console.log(inputRefs)

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
              
              const inputRef = inputRefs.current[index];

              
    
              const [Focused, setFocused] = useState(false);
    
              return(
                
    <label className='relative  block w-full  font-medium' key={index} >
                      {!inputRef.current?.value && !inputRef.current?.focus && (
                    <span>
    
                    <span className='absolute top-2 left-4 text-[10px] text-[#11241D] '>{placeholder}</span>
                    <span className='block absolute top-4 left-4 text-[14px] text-[#11241D80] mt-3'>{sample}  </span>
                    </span>
                    ) }
                <input type={type} name={name}
                         ref={inputRef} 
                          onChange={updateInput}
                          onFocus={() => (inputRef.current.focus = true)}
                          onBlur={() => (inputRef.current.focus = false)}
                
                className='w-full   p-4 bg-[#FFF9B7] bordder-none rounded-2xl border-none outline-none'  value={registerDetails[name]} />
                
    
                </label>
                
              )
    
            })
          }
    
    </div>    
    
          
        </div>
      )
}

export default VehicleDetails