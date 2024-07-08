import { FC, useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from 'react-router-dom';
import MovieList from '~/components/MovieList';
import { useMoviesQuery } from '~/hooks/useMoviesQuery';
import useQueryParams from '~/hooks/useQueryParams';
import MainLayout from '~/layouts/MainLayout';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { page } = useQueryParams();
  const navigate = useNavigate();
  const { t } = useTranslation(['home']);
  const pageData = useMemo(() => page || '1', [page]);
  const { data, isLoading } = useMoviesQuery(pageData);
  const handlePageClick = (e: { selected: number }) => {
    navigate(`?page=${e.selected + 1}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageData]);

  console.log({ data });

  return (
    <MainLayout>
      <div className='flex items-center justify-between'>
        <div className='py-3 text-3xl font-semibold text-white'>Mới cập nhật</div>
        <Link
          to={'/phim'}
          className='px-3 transition-all duration-200 select-none hover:text-primaryText'
        >
          {t('See all')}
        </Link>
      </div>
      {data && <MovieList isLoading={isLoading} movieData={data}></MovieList>}
      {data && pageData && (
        <ReactPaginate
          nextLabel='Next'
          onPageChange={handlePageClick}
          forcePage={Number(pageData) - 1}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.pagination.totalPages}
          previousLabel='Previous'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link rounded-l-lg'
          nextClassName='page-item'
          nextLinkClassName='page-link rounded-r-lg'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={() => null}
        />
      )}
    </MainLayout>
  );
};

export default Home;
