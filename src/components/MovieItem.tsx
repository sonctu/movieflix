import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMovieItem } from '~/types/movie';
import LoadImage from './LoadImage';

const MovieItem: FC<IMovieItem> = ({ slug, poster_url, thumb_url, name, year }) => {
  return (
    <Link to={`/phim/${slug}/1`}>
      <div className='relative h-56 transition-all duration-300 sm:h-96 lg:h-64 hover:scale-105'>
        <LoadImage
          image={{
            poster_url: poster_url,
            thumb_url: thumb_url,
            name: name,
          }}
        ></LoadImage>
        <div
          className='absolute inset-0 rounded-xl'
          style={{
            backgroundImage:
              'linear-gradient(to bottom,rgb(26 30 45 / 0.1) , rgb(26 30 45 / 0.65))',
          }}
        ></div>
        <div className='absolute bottom-0 z-10 w-full'>
          <div className='flex flex-col justify-end mt-auto text-white rounded-b-md h-24 p-1.5'>
            <h4 className='font-medium transition-all duration-300 hover:text-primaryText'>
              {name}
            </h4>
            <div className='text-sm text-gray-300'>{year}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
