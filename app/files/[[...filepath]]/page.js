import React from 'react'

export default async function File({params}) {
    const {filepath} = await params
    console.log(filepath)
  return (
    <div>File : {filepath?.join('/')}</div>
  )
}
