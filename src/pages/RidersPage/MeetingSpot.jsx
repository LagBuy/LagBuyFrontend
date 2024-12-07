import Map from "../../assets/RiderImage/Map.png"
import { useNavigate } from 'react-router-dom';



const MeetingSpot = () => {
    const navigate = useNavigate()
  return (
    <div>
       <div>
        <img src={Map} alt="" className="w-full"/>
        </div>


        <div>

            <div className="text-center bg-[#FFF9B7] py-6 px-3">
                <p className="text-base font-semibold mb-4">Confirm your meeting spot </p>
                <p className="font-semibold text-base mb-2"><span className="font-normal">Location: </span>John Doe Road, Bariga, Lagos.</p>
                <p className="font-normal text-sm mb-6">Check the pin on the map to highlight the correct door
                or entrance to meet the customer.</p>
                <div className="text-2xl font-bold mb-4">
                    <p>Call</p>
                </div>
                <button className="bg-[#11241D] text-white py-1 px-3 rounded-full w-full" onClick={()=>{navigate('/rider/pickup')}}>Next</button>

            </div>


        </div>

    </div>

    
  )
}

export default MeetingSpot