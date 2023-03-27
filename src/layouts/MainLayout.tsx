import React, { FC } from 'react';
import Navbar from '~/components/Navbar';

interface IProps {
  children?: React.ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <div className='px-8 mt-16'>{children}</div>
    </div>
  );
};

export default MainLayout;
