import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full shadow-xl bg-primaryBg'>
      <div className='flex items-center justify-between px-8 py-4'>
        <Link to={'/'} className='text-3xl font-semibold'>
          Movie<span className='text-primaryText'>Flix</span>
        </Link>
        <div className='flex items-center gap-3 text-lg font-medium'>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'text-primaryText' : 'text-white')}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={'/phim'}
            className={({ isActive }) => (isActive ? 'text-primaryText' : 'text-white')}
          >
            Phim
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
