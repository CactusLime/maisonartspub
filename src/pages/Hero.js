import React, { useState } from "react"
export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const images = ["/Maison3d.png", "/Maison23d.png", "/Maison33d.png"]

  const imageStyle = {
    width: "95vw",
    maxWidth: "1280px",
    maxHeight: "95vh",
    justifySelf: "center",
    objectFit: "contain",
  }
  return (
    <div>
      <img
        onClick={() => setImageIndex(imageIndex + 1)}
        src={images[imageIndex % images.length]}
        style={imageStyle}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: "50%",
          top: "50%",
        }}
      >
        {imageIndex % images.length === 2 ? (
          <a href="https://instagram.com/scholzzy">Scholzzy</a>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
