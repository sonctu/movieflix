import { useInfiniteQuery } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieItem from '~/components/MovieItem';
import MainLayout from '~/layouts/MainLayout';
import { getMovieList } from '~/services/movie';

const Movies: FC = () => {
  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({ pageParam = 1 }) => getMovieList(pageParam),
    getNextPageParam: (page) => {
      if (page && page?.pagination.currentPage < page?.pagination.totalPages) {
        return page?.pagination.currentPage + 1;
      }
      return undefined;
    },
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imgElements = document.querySelectorAll('img');
    let loadedCount = 0;

    imgElements.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        loadedCount++;
      }
    });

    if (loadedCount === imgElements.length) {
      setImagesLoaded(true);
    }
  }, []);

  return (
    <MainLayout>
      {data && (
        <InfiniteScroll
          dataLength={data.pages.flatMap((item) => item?.items).length || 0} //This is important field to render the next data
          next={() => fetchNextPage()}
          hasMore={(!isLoading && imagesLoaded) || false}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className='overflow-y-hidden'
        >
          <div className='grid grid-cols-2 py-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-x-2 gap-y-4'>
            {data.pages.map((page) => {
              return page?.items.map((item) => <MovieItem key={item._id} {...item}></MovieItem>);
            })}
          </div>
        </InfiniteScroll>
      )}
    </MainLayout>
  );
};

export default Movies;
