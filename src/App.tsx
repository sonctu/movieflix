import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const WatchMovie = lazy(() => import('./pages/WatchMovie'));

function App() {
  return (
    <div className='App'>
      <div className='text-white bg-[#1a1e2d] w-full min-h-screen'>
        <Suspense fallback={<Loader></Loader>}>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/phim' element={<Movies></Movies>}></Route>
            <Route path='/phim/:slug/:episode' element={<WatchMovie></WatchMovie>}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
