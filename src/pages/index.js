import React, {useState} from "react"

export default function Home() {
const [title,setTitle]=useState("hello world")
  return <div>{title}</div>
}
