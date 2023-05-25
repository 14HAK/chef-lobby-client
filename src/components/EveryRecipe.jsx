const EveryRecipe = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-10 mx-auto flex flex-col'>
          <div className='w-full mx-auto'>
            <div className='rounded-lg h-80 overflow-hidden'>
              <img
                alt='content'
                className='object-cover object-center h-full w-full'
                src='https://images.unsplash.com/photo-1658431618511-adeba775bd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80'
              />
            </div>
            <div className='flex flex-col sm:flex-row mt-10'>
              <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-10 h-10'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                </div>
                <div className='flex flex-col items-center text-center justify-center'>
                  <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
                    Phoebe Caulfield
                  </h2>
                  <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                  <p className='text-base'>
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                <div className='w-full mb-10 px-4'>
                  <div className='rounded-lg h-64 overflow-hidden'>
                    <img
                      alt='content'
                      className='object-cover object-center h-full w-full'
                      src='https://dummyimage.com/1202x502'
                    />
                  </div>
                  <h2 className='title-font text-2xl font-medium text-gray-900 mt-6 mb-3'>
                    The Catalyzer
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Williamsburg occupy sustainable snackwave gochujang.
                    Pinterest cornhole brunch, slow-carb neutra irony.
                  </p>
                  <button className='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded'>
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EveryRecipe;
