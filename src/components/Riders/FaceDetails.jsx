
import  { useContext, useState ,useRef} from 'react'
import {RegContext} from "./RegisterProvider"
import { IoIosCamera } from "react-icons/io";

const Facedetails = () => {
    const fileInputRef = useRef(null); 
    const [photo, setPhoto] = useState(null)

    const  {registerDetails,setRegisterDetails} = useContext(RegContext)
    const openCamera = () => {
        fileInputRef.current.click(); 
      };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setRegisterDetails((prev) => ({
            ...prev,
            photo: URL.createObjectURL(file),
          }));
        }
      };
    
  return (


    <div className='mt-10 w-[80%] mx-auto'>
        <p className='mb-4 font-bold text-[#1A362B] text-center'>Keep your face inside the frame.</p>
        <div className='w-[250px] h-[340px] border-2 border-[#00000080] rounded-[50%] bg-[#D9D9D9] mx-auto mb-10'>
    <label className="photo-input-label">
    {registerDetails.photo ? (
      <img src={registerDetails.photo} alt="Preview" className="photo-preview" />
    ) : (
      ''
    )}
    <input
      type="file"
      accept="image/*"
      capture="environment"
      onChange={handlePhotoChange}
      className="photo-input"
      style={{ display: 'none' }}
      ref={fileInputRef} 


      
    />
  </label>
  </div>
  {photo && (
        <div>
          <img src={photo} alt="User upload preview" style={{ width: '100%', maxWidth: '300px' }} />
        </div>
      )}
      <div className=' flex justify-center mb-10'>
  
  <button className='size-[80px] bg-[#11241D] rounded-full flex justify-center items-center '  onClick={openCamera} ><IoIosCamera  className='text-white text-[50px]'/></button>
  </div>
  </div>

  


  )
}

export default Facedetails
