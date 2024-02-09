import React, {useEffect, useRef} from "react";




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
          <div>
                  <button onClick={()=>widgetRef.current.open()}>
                  Upload product photos
                  </button>     
                  </div>    
  )

}

export default UploadWidget;
