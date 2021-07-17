import React, {useState} from "react"
import Title from "./Title"

export default function Home() {
const [title,setTitle]=useState("hello world")
  return <div><Title title={title} />
  <input value={title} onChange={(e)=>setTitle(e.target.value)} /> 
  </div>
}


