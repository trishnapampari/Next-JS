import Link from 'next/link'
import React from 'react'

export default function Blogs() {
  return (
    <>
      <h1>All Blogs</h1>
       <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
    </>
  )
}
