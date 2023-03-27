import { useQuery } from '@tanstack/react-query';
import { getMovieList } from '~/services/movie';

export function useMoviesQuery(page: string) {
  return useQuery(['movie-list', page], () => getMovieList(page));
}
