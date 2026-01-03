'use client'

import { useState } from "react"

export default function Likes() {
    const [count,setCount]=useState(0);
  return (
        <>
        <div onClick={()=>{
            setCount(count+1)
        }}>Count :{count} Likes</div>
        </>  

)
}
