import React from 'react'
import { useState,useEffect,createContext } from 'react'

const inputFields = [
    { name: 'firstname', type: 'text', placeholder: 'First Name', sample: 'John' },
    { name: 'lastname', type: 'text', placeholder: 'Last Name', sample: 'Doe' },
    { name: 'phonenumber', type: 'tel', placeholder: 'Phone Number', sample: '******' },
    { name: 'phonenumber2', type: 'tel', placeholder: 'Alternative Phone Number', sample: '*******' },
    { name: 'email', type: 'email', placeholder: 'Email Address', sample: 'Lagbuy@gmail.com' },
    { name: 'nin', type: 'text', placeholder: 'NIN Code', sample: '***********' },
    { name: 'nextofkin', type: 'text', placeholder: 'Next of Kin', sample: 'Son' },
    { name: 'nextofkinphone', type: 'tel', placeholder: 'Next of Kin Phone Number', sample: '07054996****8' },
    { name: 'motorcyletype', type: 'text', placeholder: 'Motorcycle Type', sample: 'Motor' },
    { name: 'motorcylebrand', type: 'text', placeholder: 'Motorcycle Brand', sample: 'e.g Honda' },
    { name: 'platenumber', type: 'text', placeholder: 'Plate Number', sample: '******' },
    { name: 'firstguarantorname', type: 'text', placeholder: 'Guarantor 1 Name', sample: 'Kehinde' },
    { name: 'firstguarantorPhonnumber', type: 'tel', placeholder: 'Guarantor 1 Phone Number ', sample: '07054996****8' },
    { name: 'secondguarantorname', type: 'text', placeholder: 'Guarantor 2 Name', sample: 'Emily Brown' },
    { name: 'firstguarantorphonenumber', type: 'tel', placeholder: 'Guarantor 2 Phone Number ', sample: '08045******7' },
    { name: 'bankname', type: 'text', placeholder: 'Bank Name', sample: 'Palmpay' },
    { name: 'accountnumber', type: 'text', placeholder: 'Account Number', sample: '*************' },
    { name: 'accountname', type: 'text', placeholder: 'Account Name', sample: 'Achem Racheal' },
  ]



 export const RegContext = createContext()

 export const RegisterProvider = ({children}) => {
    const [registerDetails,setRegisterDetails] = useState({
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
        secondguarantorphonenumber: " ",
        bankname :"",
        accountnumber:" ",
        accountname:"",
        photo: null,




    })
    console.log(registerDetails)
  
    return(
        <RegContext.Provider value  ={{registerDetails,setRegisterDetails}} >
            {children}
            
        </RegContext.Provider>
        

  )
}

