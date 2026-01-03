import notFound from '@/app/not-found';
import React from 'react'

export default async function Blog({ params }) {
    const { blogID } = await params;

    if(/^\d+$/.test(blogID)) {
        notFound();
    }
   const randomNumber = Math.random();
   if(randomNumber > 0.5) {
    throw new Error("Failed to load blog data");
   }
  return (
    <div>blog {blogID}</div>
  )
}
