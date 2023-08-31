import { NavLink } from 'react-router-dom';
import React from '../../assets/react.svg';
import { Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { PassContextParams } from '../../authContext/ContextPass';
import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
import './Header.css';

const Header = () => {
  const { user, setUser, signOutUser } = useContext(PassContextParams);
  // console.log(user);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch();
  };

  return (
    <div className='w-auto'>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href='https://flowbite.com/'>
          <div className='relative'>
            <NavLink to='/'>
              <img className='pl-5 w-25' src={React} alt='website-icon-logo' />
              <span className='absolute top-12 left-12 font-extrabold text-xl text-red-600'>
                CHEFlobby
              </span>
            </NavLink>
          </div>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <div className='lg:flex hidden p-2 whitespace-nowrap'>
            {user ? (
              <>
                <button
                  onClick={handleSignout}
                  className='inline-flex items-center bg-slate-500 border-0 py-3 px-3 focus:outline-none  hover:bg-slate-400 hover:text-white rounded-s-md text-white mt-4 -mr-3 w-24 md:mt-0 font-semibold'
                >
                  Signout
                </button>

                <div className='flex items-center bg-slate-500 px-3 py-1 rounded-e-md'>
                  <div
                    id='my-tooltip-anchor'
                    className='z-50 w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'
                  >
                    <img
                      className='rounded-full'
                      src={user?.photoURL}
                      width='40'
                      height='40'
                      alt='user-photo'
                    />
                  </div>
                  <div className='font-medium text-white'>
                    {user?.displayName}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <Tooltip
            anchorSelect='#my-tooltip-anchor'
            content={user?.displayName}
            place='left'
          />
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
          <NavLink>
            {user ? (
              <button
                onClick={handleSignout}
                className='inline-flex lg:hidden items-center border-0 py-2 px-3 focus:outline-none  hover:underline hover:text-slate-600 rounded-s-md text-slate-800 w-24 font-semibold'
              >
                Signout
              </button>
            ) : (
              <></>
            )}
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
