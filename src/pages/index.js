import React, { useState } from "react"
import Title from "./Title"
import Hero from "./Hero"

export default function Home() {
  const [title, setTitle] = useState("hello world")
  const mainDivStyle = {
    display: "flex",
    width: "100vw",
    overflow: "hidden",
    justifyContent: "center",
  }

  return (
    <div>
      {/* <Title title={title} /> */}
      <div style={mainDivStyle}>
        <Hero />
      </div>
      {/* <input value={title} onChange={e => setTitle(e.target.value)} /> */}
    </div>
  )
}
