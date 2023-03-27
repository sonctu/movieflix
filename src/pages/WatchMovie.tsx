import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useMemo } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import Skeleton from 'react-loading-skeleton';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Player } from 'react-tuby';
import LoadImage from '~/components/LoadImage';
import { useMoviesQuery } from '~/hooks/useMoviesQuery';
import MainLayout from '~/layouts/MainLayout';
import { getMovie } from '~/services/movie';

const WatchMovie: FC = () => {
  const { slug, episode } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['movie', slug],
    queryFn: () => getMovie(slug as string),
    enabled: !!slug,
  });
  const recommendedMoviesQuery = useMoviesQuery('1');

  const episodeData = useMemo(() => Number(episode) || 1, [episode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [episode]);

  console.log(recommendedMoviesQuery.data?.items);
  return (
    <>
      <MainLayout>
        <div className='grid grid-cols-4 gap-6 pt-3 pb-4'>
          <div className='col-span-4 lg:col-span-3'>
            {!isLoading && data && (
              <>
                <div className='w-full h-56 sm:h-80 md:h-[450px] lg:h-[500px]'>
                  <Player
                    dimensions={{ width: '100%', height: '100%' }}
                    src={data.episodes[0].server_data[episodeData - 1].link_m3u8}
                    poster={data.movie.poster_url || data.movie.thumb_url}
                  >
                    {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
                  </Player>
                </div>
                <h3 className='my-3 text-2xl font-semibold'>{data?.movie.name}</h3>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5 text-yellow-400'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                      />
                    </svg>
                    <span>{data?.movie.view}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5 text-yellow-400'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                      />
                    </svg>

                    <span>{data?.movie.year}</span>
                  </div>
                </div>
                <ul className='flex flex-wrap gap-4 my-3'>
                  {data?.movie.category.map((item) => (
                    <li className='px-3 py-1.5 bg-gray-500 rounded-full' key={item.id}>
                      {item.name}
                    </li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{ __html: data?.movie.content as string }} />
                <div className='grid grid-cols-3 gap-2 px-2 pb-4 my-4 overflow-y-scroll shadow-xl sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 bg-primaryBg/30 max-h-96'>
                  {data?.episodes[0].server_data.map((_, index) => (
                    <NavLink
                      to={`/phim/${slug}/${index + 1}`}
                      key={index}
                      className={({ isActive }) =>
                        `px-3 py-1.5 hover:bg-primaryText transition-all bg-gray-500 rounded text-center ${
                          isActive ? 'bg-primaryText' : ''
                        }`
                      }
                    >
                      {index + 1}
                    </NavLink>
                  ))}
                </div>
              </>
            )}
            {isLoading && (
              <>
                <Skeleton className='w-full h-56 sm:h-80 md:h-[450px] lg:h-[500px]'></Skeleton>
                <Skeleton className='w-full my-3 h-9'></Skeleton>
                <Skeleton className='w-full h-16'></Skeleton>
              </>
            )}
          </div>
          <div className='col-span-4 lg:col-span-1'>
            <div className='bg-transparent rounded-lg lg:px-3 lg:pb-2'>
              <div className='text-xl font-medium'>Recommended</div>
              <div className='flex flex-wrap gap-3 my-2 lg:flex-col'>
                {!recommendedMoviesQuery.isLoading &&
                  recommendedMoviesQuery.data?.items.slice(0, 10).map((item, index) => (
                    <Link
                      to={`/phim/${item.slug}/1`}
                      className='flex flex-col max-w-full gap-2 lg:flex-row group'
                      key={index}
                    >
                      <div className='w-24 h-16'>
                        <LoadImage
                          image={{
                            poster_url: item.thumb_url,
                            thumb_url: item.poster_url,
                            name: item.name,
                          }}
                          className='transition-all duration-200 group-hover:scale-105'
                        ></LoadImage>
                      </div>
                      <div className='flex-1 hidden text-sm transition-all duration-200 group-hover:text-primaryText lg:block'>
                        {item.name}
                      </div>
                    </Link>
                  ))}
                {recommendedMoviesQuery.isLoading && (
                  <>
                    {Array(9)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className='flex flex-col h-full gap-2 lg:flex-row'>
                          <Skeleton
                            containerClassName='block w-24 h-16'
                            className='h-full'
                          ></Skeleton>
                          <Skeleton
                            containerClassName='lg:block h-6 hidden flex-1'
                            className='h-full'
                          ></Skeleton>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default WatchMovie;
