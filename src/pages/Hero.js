import React, {useState} from "react";
export default () =>{
    const [imageIndex,setImageIndex]=useState(0);
    const images=["/Maison3d.png","/Maison23d.png","/Maison33d.png"];
    
    const imageStyle={width: "95vw", maxWidth: "1280px", maxHeight: "95vh", justifySelf: "center"};
    return <img onClick={setImageIndex(imageIndex+1)} src={images[imageIndex%images.length]} style={imageStyle} />;
}