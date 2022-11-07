import React, {useEffect, useRef} from "react";
import {
  ArrowUpTrayIcon,
  CameraIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";



const UploadWidget= () => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(()=>{
    cloudinaryRef.current = window.cloudinary;
     widgetRef.current = cloudinaryRef.current.createUploadWidget({
          cloudName: 'divdgryxc',
          uploadPreset: 'qkwdplpd'
    }, function(err, result){
        console.log(result);
    })
    console.log(cloudinaryRef.current)
  }, [])

  return (
    <div className="flex flex-col space-y-1">
    <label className="text-[#777D88]">Product Photos</label>
    <div className="flex items-center  h-36 justify-center space-x-20 border border-[#E3E7F4] px-4 py-2 ">
      <div className="flex space-x-2">
        <CameraIcon className="h-6 w-6 text-[#798086]" />
        <label htmlFor="proofOfMembership" className="text-[#798086]">
        <div className="flex space-x-2">  
                  <button onClick={()=>widgetRef.current.open()}>
                  Upload product photos
                  </button>     
            </div>
        </label>
      </div>
      <label htmlFor="proofOfMembership">
        <ArrowUpTrayIcon className="h-6 w-6 text-[#798086]" />
      </label>
    </div>
  </div>

         
       
  )

}

export default UploadWidget;

// cloudName: 'divdgryxc', 
// uploadPreset: 'qkwdplpd'