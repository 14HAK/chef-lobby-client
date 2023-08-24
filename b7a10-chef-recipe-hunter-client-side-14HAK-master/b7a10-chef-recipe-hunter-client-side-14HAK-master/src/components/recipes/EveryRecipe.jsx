import { useLoaderData } from 'react-router-dom';
import ChefRecipeItem from './ChefRecipeItem/ChefRecipeItem';
import { useContext } from 'react';
import { PassContextParams } from '../../authContext/ContextPass';

const EveryRecipe = () => {
  const data = useLoaderData();

  // console.log(data);
  return (
    <>
      <section className='text-gray-600 bg-slate-100 body-font'>
        <div className='container px-5 py-10 mx-auto flex flex-col'>
          <div className='w-full mx-auto'>
            <div className='rounded-lg h-80 overflow-hidden'>
              <img
                alt='content'
                className='object-cover object-center h-full w-full'
                src={data?.recipe_details[2]?.recipe_img}
              />
            </div>
            <div className='flex flex-col sm:flex-row mt-10'>
              <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                <div className='w-32 h-32 overflow-hidden rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
                  <img
                    src={
                      data?.chef_img ||
                      'https://media.licdn.com/dms/image/D5603AQHJ9iEwxNlTgg/profile-displayphoto-shrink_800_800/0/1668156933212?e=2147483647&v=beta&t=XW67hitvfFMnR8jh0nJHo8MIP59dbT_NhOvfqk12iuE'
                    }
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center text-center justify-center'>
                  <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
                    {data?.chef_name}
                  </h2>
                  <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                  <p className='text-base'>{data?.short_details_chef}</p>
                </div>
              </div>
              <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                {data?.recipe_details?.map((elem, index) => (
                  <ChefRecipeItem key={index} elem={elem}></ChefRecipeItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EveryRecipe;
