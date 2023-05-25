import { Carousel } from 'flowbite-react';
import EveryItem from './EveryItem';

const Home = () => {
  const data = [1, 2, 3, 4];

  return (
    <div className='h-auto'>
      <div className='h-[35rem] relative'>
        <p className='text-3xl absolute w-8/12 z-40 p-10 capitalize leading-10  text-center text-slate-500 bg-white bg-opacity-90 rounded-lg font-extrabold top-44 lg:left-[15rem] sm:left-[7rem] animate-wiggle animate-infinite animate-duration-[2000ms] animate-delay-200'>
          &#10147; Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Carousel className='rounded-none'>
          <img
            src='https://images.unsplash.com/photo-1658431618511-adeba775bd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80'
            alt='...'
          />
          <img
            src='https://images.unsplash.com/photo-1658431618511-adeba775bd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80'
            alt='...'
          />
          <img
            src='https://images.unsplash.com/photo-1658431618511-adeba775bd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80'
            alt='...'
          />
        </Carousel>
      </div>

      <div className='pt-16 pb-10 text-center'>
        <h2 className='text-4xl font-extrabold underline text-slate-600'>
          recipe section
        </h2>
      </div>

      <div className=' px-10 pb-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {data.map((item, index) => (
          <EveryItem key={index}></EveryItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
