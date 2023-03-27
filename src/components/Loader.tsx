import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-primary'>
      <div className='loader'></div>
    </div>
  );
};

export default Loader;
