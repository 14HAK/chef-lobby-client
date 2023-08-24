import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ChefRecipeItem = ({ elem }) => {
  const [favorate, setFavorate] = useState(false);

  const handleFavorate = () => {
    setFavorate(!favorate);
    toast.success('Add To Favorite!', {
      duration: 1000,
      position: 'top-center',
    });
  };

  return (
    <>
      <div className='w-full mb-10 px-4 pb-3 border-b-2'>
        <div className='rounded-lg h-64 overflow-hidden'>
          <img
            alt='content'
            className='object-cover object-center h-full w-full'
            src={elem?.recipe_img}
          />
        </div>
        <div className='flex items-center'>
          <h2 className='title-font text-3xl font-bold text-[2b2b2b] mt-6 mb-3'>
            {elem?.recipe_name}
          </h2>

          <div>
            <button disabled={favorate} onClick={handleFavorate}>
              {!favorate ? (
                <svg
                  width='40'
                  height='40'
                  version='1.1'
                  viewBox='0 0 700 700'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m428.87 528.35c-206.92-57.227-305.57-151.49-334.95-236.16-13.402-38.602-12.582-75.402-1.1172-106.2 11.602-31.168 34.062-56.121 63.746-70.648 45.664-22.336 108.25-19.875 173.93 23.137 35.387-70.109 88.387-103.55 139.11-107.03 32.957-2.2539 64.891 8.1289 90.523 29.32 25.324 20.934 44.449 52.418 52.148 92.566 16.879 88.027-21.465 219.04-172.21 372.15-3.0039 3.0547-7.3398 4.0156-11.184 2.8555zm149.57-329.05c-0.14453 6.1562-5.2656 11.039-11.422 10.895-6.1562-0.14453-11.039-5.2656-10.895-11.422l0.027344-1.0859c0.14453-6.1562 5.2656-11.039 11.422-10.895s11.039 5.2656 10.895 11.422zm-1.9062-33.09c0.91406 6.1133-3.3008 11.82-9.4102 12.73-6.1133 0.91406-11.82-3.3008-12.73-9.4102-3.6914-24.242-12.945-43.441-25.562-56.828-12.945-13.73-29.527-21.422-47.199-22.172-6.1562-0.23828-10.961-5.4375-10.723-11.594 0.23828-6.1562 5.4375-10.961 11.594-10.723 23.594 0.99219 45.578 11.113 62.598 29.168 15.645 16.59 27.027 39.879 31.438 68.828zm-461.53 118.73c27.031 77.902 119.31 165.16 313.71 220.18 140.83-144.84 177.12-266.55 161.58-347.56-6.6602-34.738-22.945-61.762-44.449-79.535-21.184-17.516-47.57-26.105-74.781-24.242-45.941 3.1484-94.57 36.066-125.95 105.86-0.30469 0.67969-0.6875 1.3438-1.1367 1.9727-3.5977 5-10.574 6.1328-15.578 2.5352-62.102-44.773-120.68-48.984-162.05-28.746-24.492 11.984-43.039 32.613-52.637 58.398-9.7305 26.141-10.316 57.703 1.2891 91.145z' />
                </svg>
              ) : (
                <svg
                  width='40'
                  height='40'
                  version='1.1'
                  viewBox='0 0 700 700'
                  className='disabled:'
                >
                  <path d='m428.88 528.36c-206.92-57.227-305.57-151.49-334.95-236.16-13.402-38.602-12.582-75.402-1.1172-106.2 11.602-31.168 34.062-56.121 63.746-70.648 45.664-22.336 108.25-19.875 173.93 23.137 35.387-70.109 88.387-103.55 139.11-107.03 32.957-2.2539 64.891 8.1289 90.523 29.32 25.324 20.934 44.449 52.418 52.148 92.566 16.879 88.027-21.465 219.04-172.21 372.15-3.0039 3.0547-7.3398 4.0156-11.184 2.8555zm149.57-329.05 0.027343-1.0859c0.14453-6.1562-4.7344-11.277-10.895-11.422-6.1562-0.14453-11.277 4.7344-11.422 10.895l-0.027344 1.0859c-0.14453 6.1562 4.7344 11.277 10.895 11.422 6.1562 0.14453 11.277-4.7344 11.422-10.895zm-1.9062-33.09c-4.4102-28.949-15.793-52.238-31.438-68.828-17.02-18.059-39.004-28.176-62.598-29.168-6.1562-0.23828-11.355 4.5625-11.594 10.723-0.23828 6.1562 4.5625 11.355 10.723 11.594 17.672 0.74609 34.254 8.4414 47.199 22.172 12.621 13.387 21.875 32.59 25.562 56.828 0.91406 6.1133 6.6211 10.324 12.73 9.4102 6.1133-0.91406 10.324-6.6211 9.4102-12.73z' />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className='leading-relaxed text-base'>
          <span className='text-[2b2b2b] pb-2 font-medium underline text-2xl'>
            Ingredient:
          </span>
          <ul className='text-start grid pb-3 border-b-2 grid-cols-2 lg:grid-cols-3 list-inside'>
            {elem?.recipe_ingredients.map((item) => (
              <li className='pb-2 lg:pb-0'>_{item}</li>
            ))}
          </ul>
          <br />
          <span className='text-[2b2b2b] pb-2 font-medium underline text-2xl'>
            Making Process:
          </span>
          <ul className='text-start list-inside'>
            {elem?.making_process.map((item, index) => (
              <li key={index} className='pb-3'>
                _{item}
              </li>
            ))}
            <button className='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded'>
              Button
            </button>
          </ul>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default ChefRecipeItem;
