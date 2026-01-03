"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react";

export default function Error({error,reset}) {
  const router=useRouter();
  return (
    <div>Something went wrong
        <p>{error.message}</p>
        <button onClick={()=>{
          // page will  not reload fully, only the data will be refetched
          startTransition(()=>{
            router.refresh()
            reset()
          })
            
        }}>Try again</button>
    </div>
  )
}
    