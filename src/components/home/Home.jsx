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
      <div></div>
      <div className='pt-14 pb-14 text-center'>
        <h2 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 uppercase'>
          Capability
        </h2>
      </div>
      <div>
        <section className='text-gray-600 body-font'>
          <div className='container flex flex-wrap px-5 pb-14 mx-auto items-center'>
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
              <a className='text-slate-700 inline-flex items-center mt-4'>
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
              <img
                src='https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGNoZWZ8ZW58MHx8MHx8&w=1000&q=80'
                alt='...'
              />
            </div>
          </div>
        </section>
      </div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 pb-14 mx-auto'>
          <div className='flex flex-col text-center w-full mb-8'>
            <h1 className='sm:text-2xl uppercase text-3xl font-bold title-font mb-4 text-gray-900'>
              viewer review
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Being a chef means sacrificing a {`"normal"`} life outside your
              kitchen. It means grueling, long hours on your feet in a hot
              kitchen working for.
            </p>
          </div>
          <div className='flex flex-wrap -m-4 text-center'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-slate-700 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  2.7K
                </h2>
                <p className='leading-relaxed'>Downloads</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-slate-700 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  1.3K
                </h2>
                <p className='leading-relaxed'>Users</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-slate-700 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M3 18v-6a9 9 0 0118 0v6'></path>
                  <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  74
                </h2>
                <p className='leading-relaxed'>Files</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='text-slate-700 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  46
                </h2>
                <p className='leading-relaxed'>Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 pb-14 mx-auto'>
          <div className='flex flex-wrap w-full mb-20'>
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                Becoming a culinary chef is a journey
              </h1>
              <div className='h-1 w-20 bg-slate-500 rounded'></div>
            </div>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
              that requires a deep love for food, creativity, and a commitment
              to honing your culinary skills. As a chef,{" you'll"} have the
              opportunity to create exquisite dishes, experiment with flavors,
              and master various cooking techniques. Whether you dream of
              working in a high-end restaurant or owning your own food business,
              the path to becoming a chef is exciting and rewarding.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 -m-4'>
            <div className='xl:w-full md:w-full p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <img
                  className='h-60 rounded w-full object-cover object-center mb-6'
                  src='https://ice.edu/sites/default/files/inline-images/students%20plating%20web.jpg'
                  alt='content'
                />
                <h3 className='tracking-widest uppercase text-indigo-500 text-xs font-medium title-font'>
                  step-1
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Education and Foundation
                </h2>
                <p className='leading-relaxed text-base'>
                  Start by gaining a solid culinary education. You can enroll in
                  culinary schools, community colleges, or vocational programs
                  that offer culinary arts courses. These programs provide
                  essential knowledge about ingredients, cooking techniques,
                  food safety, and kitchen management. A strong educational
                  foundation sets the stage for your culinary journey.
                </p>
              </div>
            </div>
            <div className='xl:w-full md:w-full p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <img
                  className='h-52 rounded w-full object-cover object-center mb-6'
                  src='https://www.patriotledger.com/gcdn/authoring/2011/10/15/NPAL/ghows-WL-b040cf97-277b-4d08-842e-4f9a49027a3b-7414b04c.jpeg'
                  alt='content'
                />
                <h3 className='tracking-widest uppercase text-indigo-500 text-xs font-medium title-font'>
                  step-2
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Hands-On Experience
                </h2>
                <p className='leading-relaxed text-base'>
                  Practical experience is crucial for becoming a skilled chef.
                  Begin by working in entry-level positions, such as a line cook
                  or kitchen assistant, to learn the basics of kitchen
                  operations. As you gain experience, you'll gradually take on
                  more responsibilities and be exposed to a wider range of
                  cooking styles and cuisines. Learning from experienced chefs
                  and working your way up in a kitchen environment will help you
                  refine your skills.
                </p>
              </div>
            </div>
            <div className='xl:w-full md:w-full p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <img
                  className='h-48 rounded w-full object-cover object-center mb-6'
                  src='https://www.liveabout.com/thmb/m5sj1tnGvr2OIw4gPx73tw_vvho=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-607047661-571e40a75f9b58857dfd0e72.jpg'
                  alt='content'
                />
                <h3 className='tracking-widest uppercase text-indigo-500 text-xs font-medium title-font'>
                  step-3
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Experimentation and Creativity
                </h2>
                <p className='leading-relaxed text-base'>
                  A key trait of a successful chef is creativity. Experiment
                  with different ingredients, flavors, and cooking methods to
                  develop your unique culinary style. Don't be afraid to try new
                  combinations and techniques. This experimentation will not
                  only enhance your skills but also set you apart as a chef with
                  a distinct approach to cooking.
                </p>
              </div>
            </div>
            <div className='xl:w-full md:w-full p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <img
                  className='h-56 rounded w-full object-cover object-center mb-6'
                  src='https://www.nscc.ca/img/programs-and-courses/opengraph-programs/fog-culinary-skills.jpg'
                  alt='content'
                />
                <h3 className='tracking-widest uppercase text-indigo-500 text-xs font-medium title-font'>
                  step-4
                </h3>
                <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                  Continuous Learning and Specialization
                </h2>
                <p className='leading-relaxed text-base'>
                  The culinary world is ever-evolving, so it's important to stay
                  up-to-date with the latest trends, ingredients, and
                  techniques. Consider specializing in a particular cuisine or
                  aspect of cooking that interests you, such as baking, pastry
                  arts, or international cuisine. You can attend workshops,
                  seminars, and masterclasses to further enhance your expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='pb-14 text-center'>
        <h2 className='sm:text-2xl uppercase text-3xl font-bold title-font mb-4 text-gray-900'>
          our {"chef's"}
        </h2>
        <p className='text-sm text-gray-500 capitalize'>
          {' '}
          There are a variety of styles of cooking in China, but most Chinese
          chefs classified eight regional cuisines according to their distinct
          tastes and local
        </p>
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
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 pb-14 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Contact Us
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='name'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='message'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button className='flex mx-auto text-white bg-slate-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
