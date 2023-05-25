import { Navbar } from 'flowbite-react';
import './Header.css';
import Logo from '../../public/vite.svg';

import { NavLink } from 'react-router-dom';

const Header = () => {
  const user = { email: 'email@gmail.com' };

  const handleLogout = () => {
    console.log('clicked button');
  };

  return (
    <div className='w-auto'>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href='https://flowbite.com/'>
          <div className='relative'>
            <NavLink to='/'>
              <img className='pl-5 w-25' src={Logo} alt='website-icon-logo' />
              <span className='absolute top-12 left-12 font-extrabold text-xl text-red-600'>
                CHEFlobby
              </span>
            </NavLink>
          </div>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <div className='lg:flex hidden p-2 whitespace-nowrap'>
            <button
              onClick={handleLogout}
              className='inline-flex items-center bg-slate-500 border-0 py-3 px-3 focus:outline-none  hover:bg-slate-400 hover:text-white rounded-s-md text-white mt-4 -mr-3 w-24 md:mt-0 font-semibold'
            >
              Signout
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
                {user ? user?.email : 'no user here'}
              </div>
            </div>
          </div>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to={'/home'}
            className={({ isActive }) =>
              isActive ? 'active  text-blue-600' : ''
            }
          >
            <Navbar.Link>Home</Navbar.Link>
          </NavLink>
          <NavLink to={'/blog'}>
            <Navbar.Link>Blog</Navbar.Link>
          </NavLink>
          <NavLink to={'/signup'}>
            <Navbar.Link>Signup</Navbar.Link>
          </NavLink>
          <NavLink to={'/signin'}>
            <Navbar.Link>Signin</Navbar.Link>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
