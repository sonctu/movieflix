import { Movie, MovieData } from '~/types/movie';
import instance from '~/utils/axios';

export const getMovieList = async (page: number | string = 1) => {
  try {
    const response = await instance.get<MovieData>('/danh-sach/phim-moi-cap-nhat', {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (slug: string) => {
  try {
    const response = await instance.get<Movie>(`/phim/${slug}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
