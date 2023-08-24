import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PassContextParams } from '../../authContext/ContextPass';

const Signin = () => {
  const {
    setLoading,
    error,
    setError,
    setUser,
    userSignin,
    userWithGoogle,
    userWithGithub,
  } = useContext(PassContextParams);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
        form.reset();
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogle = () => {
    userWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGithub = () => {
    userWithGithub()
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <div className='p-10  bg-slate-200'>
        <section className='max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300'>
          <h1 className='text-4xl font-medium'>Signin</h1>

          <div className='grid lg:grid-cols-2 grid-col-1 gap-5 lg:h-16 h-auto'>
            <div className='my-5'>
              <button
                onClick={handleGoogle}
                className='w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'
              >
                <img
                  src='https://www.svgrepo.com/show/355037/google.svg'
                  className='w-6 h-6'
                  alt=''
                />{' '}
                <span>Google</span>
              </button>
            </div>
            <div className='my-5'>
              <button
                onClick={handleGithub}
                className='w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                <span>Github</span>
              </button>
            </div>
          </div>
          <form onSubmit={handleSignin} className='my-10'>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='email'>
                <p className='font-medium text-slate-700 pb-2'>Email address</p>
                <input
                  id='email'
                  name='email'
                  type='email'
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='@gmail.com'
                  required
                />
              </label>
              <label htmlFor='password'>
                <p className='font-medium text-slate-700 pb-2'>Password</p>
                <input
                  id='password'
                  name='password'
                  type='password'
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='******'
                  required
                />
              </label>
              <small className='text-red-700 font-light'>{error}</small>
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='remember' className='flex items-center'>
                    <input
                      type='checkbox'
                      id='remember'
                      className='w-4 h-4 border-slate-200 focus:bg-indigo-600'
                    />
                    <span className='ms-1'>Remember me</span>
                  </label>
                </div>
                <div>
                  <button className='font-medium hover:underline text-indigo-600'>
                    Forgot Password?
                  </button>
                </div>
              </div>
              <button className='w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                  />
                </svg>
                <span>Signin</span>
              </button>
              <p className='text-center'>
                Not registered yet?{' '}
                <button className='text-indigo-600 hover:underline font-medium inline-flex space-x-1 items-center'>
                  <Link to={'/signup'}>
                    <span>Register now</span>
                  </Link>
                </button>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signin;
