import './Header.css';
import Logo from '../../public/vite.svg';

import { NavLink } from 'react-router-dom';

const Header = () => {
  const currentUser = { email: 'email@gmail.com' };

  const handleLogout = () => {
    console.log('clicked button');
  };

  return (
    <div className='flex justify-between items-center bg-gray-300 px-10 py-0'>
      <div>
        <NavLink to='/'>
          <img className='pl-5 w-20' src={Logo} alt='website-icon-logo' />
        </NavLink>
      </div>

      <nav>
        <ul className='list-none flex justify-between items-center text-slate-600'>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) => (isActive ? 'active ml-5' : 'ml-5')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' className='ml-5'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='ml-5'>
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink to='/signin' className='ml-5'>
              Signin
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex p-2 whitespace-nowrap'>
        <button
          onClick={handleLogout}
          className='inline-flex items-center bg-white border-0 py-3 px-3 focus:outline-none  hover:bg-green-400 hover:text-white rounded-s-md text-base mt-4 -mr-3 w-24 md:mt-0 font-semibold'
        >
          Log out
        </button>
        <div className='flex items-center bg-slate-500 px-3 py-1 rounded-e-md'>
          <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
            <img
              className='rounded-full'
              src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
              width='60'
              height='60'
              alt='user-photo'
            />
          </div>
          <div className='font-medium text-white'>
            {currentUser ? currentUser?.email : 'no user here'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
