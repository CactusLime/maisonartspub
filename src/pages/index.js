import React, {useState} from "react"

export default function Home() {
const [title,setTitle]=useState("hello world")
  return <div>{title}
  <input value={title} onChange={(e)=>setTitle(e.target.value)} /> 
  </div>
}
