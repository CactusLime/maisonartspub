import React, { useState } from "react"
export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const images = ["/Maison3d.png", "/Maison23d.png", "/Maison33d.png"]

  const imageStyle = {
    height: "100%",
    width: "100%",
    justifySelf: "center",
    objectFit: "contain",
  }

  const imageDivStyle = {
    width: "95vw",
    maxWidth: "1280px",
    position: "relative",
    height: "95vh",
    alignContent: "center",
  }

  const injectedDivStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
  }

  return (
    <div style={imageDivStyle}>
      <img
        onClick={() => setImageIndex(imageIndex + 1)}
        src={images[imageIndex % images.length]}
        style={imageStyle}
      />
      {/* <div
        style={injectedDivStyle}>
        {imageIndex % images.length === 2 ? (
          <a href="https://instagram.com/scholzzy">Scholzzy</a>
        ) : (
          <div />
        )}
      </div> */}
    </div>
  )
}
