import React, { useState } from "react"
export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const images = ["/Maison3d.png", "/Maison23d.png", "/Maison33d.png"]

  const imageStyle = {
    width: "95vw",
    maxWidth: "1280px",
    maxHeight: "95vh",
    justifySelf: "center",
  }
  return (
    <div onClick={setImageIndex(imageIndex + 1)}>
      <img src={images[imageIndex % images.length]} style={imageStyle} />
    </div>
  )
}
