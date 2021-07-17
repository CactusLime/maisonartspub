import React, {useState} from "react"
import Title from "./Title"
import Hero from "./Hero"

export default function Home() {
const [title,setTitle]=useState("hello world")
  return <div>
    <Title title={title} />
    <Hero />
    <input value={title} onChange={(e)=>setTitle(e.target.value)} /> 
  </div>
}


