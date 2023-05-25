import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='p-10  bg-slate-200'>
      <section className='max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <h1 className='text-4xl font-medium'>Signup</h1>
        <p className='text-slate-500 pt-1'>Hey, Welcome!</p>

        <form className='my-10'>
          <div className='flex flex-col space-y-5'>
            <label htmlFor='userName'>
              <p className='font-medium text-slate-700 pb-2'>User name</p>
              <input
                id='userName'
                name='userName'
                type='text'
                required
                className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='sample.email@gmail.com'
              />
            </label>
            <label htmlFor='photoUrl'>
              <p className='font-medium text-slate-700 pb-2'>Photo url</p>
              <input
                id='photoUrl'
                name='photoUrl'
                type='text'
                required
                className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='sample.email@gmail.com'
              />
            </label>
            <label htmlFor='email'>
              <p className='font-medium text-slate-700 pb-2'>Email</p>
              <input
                id='email'
                name='email'
                type='email'
                required
                className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='sample.email@gmail.com'
              />
            </label>
            <label htmlFor='password'>
              <p className='font-medium text-slate-700 pb-2'>Password</p>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='******'
              />
            </label>

            <button className='w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center'>
              <span>Signup</span>
            </button>
            <p className='text-center'>
              Already have an account?{' '}
              <button className='text-indigo-600 font-medium inline-flex space-x-1 items-center'>
                <Link to={'/signin'}>
                  <span className='hover:underline'>Signin</span>
                </Link>
              </button>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
