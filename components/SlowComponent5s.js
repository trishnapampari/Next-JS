import React from 'react'

export default async function SlowComponent5s() {
    const slowresponse = await fetch('https://procodrr.vercel.app/?sleep=2000');
  const slowData = await slowresponse.json();


  return (
    <div>
        {JSON.stringify(slowData)}
    </div>
  )
}
