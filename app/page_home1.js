import Likes from "@/components/Likes";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //fetch data from API in server component

//   const slowresponse = await fetch('https://procodrr.vercel.app/?sleep=2000');
//   const slowData = await slowresponse.json();


//     const slowresponse1 = await fetch('https://procodrr.vercel.app/?sleep=2000');
//   const slowData1 = await slowresponse1.json();


//  const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
//  const todos = await data.json();

 // To fetch all apis in parallel we can use Promise.all
const [slowData, slowData1, todos] = await Promise.all([
  fetch('https://procodrr.vercel.app/?sleep=2000').then(res => res.json()),
  fetch('https://procodrr.vercel.app/?sleep=2000').then(res => res.json()),
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => res.json())
]);


  return (
  <>
  <h1>Home Page</h1>
  <Link href="/about">About</Link>
  <Link href="/blogs">Blogs</Link>
  {/* <Likes /> */}
    {todos.map((todo)=>(
      <div key={todo.id} style={{ display: "flex", gap: "10px", padding: "10px", margin: "10px" }}>
        <input type="checkbox" readOnly checked={todo.completed} />
        <h2>{todo.title}</h2>
      </div>
    ))}

    {JSON.stringify(slowData)}
    {JSON.stringify(slowData1)}

  </>
  );

  // By using diff components we can use suspense to load data in parallel
  //  <Suspense fallback={<div>Loading todos...</div>}>
  //   <TodoItem/>
  // </Suspense>

  //  <Suspense fallback={<div>Loading data1...</div>}>
  //   <SlowComponent2s/>
  // </Suspense>

  //  <Suspense fallback={<div>Loading data2...</div>}>
  //   <SlowComponent5s/>
  // </Suspense>
}


