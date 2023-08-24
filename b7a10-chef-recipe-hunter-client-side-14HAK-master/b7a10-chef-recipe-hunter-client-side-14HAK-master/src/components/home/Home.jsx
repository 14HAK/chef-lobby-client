import { lazy, Suspense } from 'react';

import { Carousel } from 'flowbite-react';
// import EveryItem from '../recipes/recipes-details/EveryItem';
import { useContext } from 'react';
import { DataPassContext } from '../../authContext/ContextPass';

const EveryItem = lazy(() => import('../recipes/recipes-details/EveryItem'));

const Home = () => {
  const { recipeData } = useContext(DataPassContext);
  // console.log(recipeData);

  return (
    <div className='h-auto'>
      <div className='lg:h-[35rem] h-[10rem] relative'>
        <p className='text-base lg:block hidden  lg:text-3xl absolute w-8/12 z-40 p-10 capitalize leading-10  text-center text-slate-500 bg-white bg-opacity-90 rounded-lg font-extrabold top-44 lg:left-[15rem] sm:left-[7rem] animate-wiggle animate-infinite animate-duration-[2000ms] animate-delay-200'>
          &#10147; Discover world-class chefs, tantalizing recipes, and culinary
          inspiration on the ultimate gastronomic platform.
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
        <h2 className='text-4xl font-extrabold uppercase underline text-slate-600'>
          Ours origin
        </h2>
      </div>
      <div>
        <section className='text-gray-600 body-font'>
          <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200'>
              <h1 className='sm:text-3xl text-2xl capitalize font-medium title-font mb-2 text-gray-900'>
                suitable for Garden Terrace Porch Metal Peacock Statue.
              </h1>
              <p className='leading-relaxed text-base'>
                A year ago, David Toutain was content running his acclaimed
                two-Michelin-star restaurant in Paris, France. Happily married
                to “an amazing woman”, with kids and a dog, he had no plans to
                expand, especially overseas. “Life was good,” he says. Then
                Elizabeth Chu – founder of Hong Kong’s ZS Hospitality Group,
                behind restaurants including Hansik Goo, Whey and Ying Jee Club
                – ate at his eponymous restaurant. Impressed, she invited him to
                collaborate on a new venture. He flew to Hong Kong to see what
                had changed since his previous visit 16 years ago. “I told
                Elizabeth about my vision, which is local, vegetal and
                produce-focused. I didn’t want to open for the sake of it, it
                had to be right for what we are doing,” says Toutain.
              </p>
              <a className='text-indigo-500 inline-flex items-center mt-4'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
            <div className='flex flex-col md:w-1/2 md:pl-12'>
              <h2 className='title-font font-semibold text-gray-800 tracking-wider text-sm mb-3'>
                TIANJIN
              </h2>
              <img
                src='https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGNoZWZ8ZW58MHx8MHx8&w=1000&q=80'
                alt='...'
              />
            </div>
          </div>
        </section>
      </div>

      <div className='pt-16 pb-10 text-center'>
        <h2 className='text-4xl font-extrabold uppercase underline text-slate-600'>
          Recipes Zoon
        </h2>
      </div>

      <div className=' px-10 pb-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        <Suspense
          fallback={
            <h2 className='text-4xl flex items-center animate-wiggle'>
              loading...
            </h2>
          }
        >
          {recipeData ? (
            <>
              {recipeData?.map((item, index) => (
                <EveryItem key={index} item={item}></EveryItem>
              ))}
            </>
          ) : (
            <h2 className='text-4xl flex items-center animate-wiggle'>
              loading...
            </h2>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
