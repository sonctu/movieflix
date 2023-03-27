import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { MovieData } from '~/types/movie';
import MovieItem from './MovieItem';

interface IProps {
  movieData: MovieData;
  isLoading?: boolean;
}

const MovieList: FC<IProps> = ({ movieData, isLoading = false }) => {
  return (
    <div className='grid grid-cols-2 py-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-x-2 gap-y-4'>
      {!isLoading &&
        movieData?.items.map((item) => {
          return <MovieItem {...item} key={item._id}></MovieItem>;
        })}
      {isLoading &&
        Array(16)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className='h-64 sm:h-72 md:h-96 lg:h-64'></Skeleton>
          ))}
    </div>
  );
};

export default MovieList;
