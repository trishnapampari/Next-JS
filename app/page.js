 import Image from 'next/image';
const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
        <Image src="/ocean-mountain.jpg" 
        width={500} height={300} alt="Ocean Mountain"
        quality={75} />
      </div>
    </>
  );
};

export default Home;