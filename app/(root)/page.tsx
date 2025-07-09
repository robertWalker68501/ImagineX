import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div className=''>
      <h1 className='text-3xl'>Home Page</h1>
      <UserButton />
    </div>
  );
}

export default Home;
