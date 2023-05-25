import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';

const Navbar: FC = () => {
  const { t, i18n } = useTranslation(['home']);
  const currentLanguage = locales[i18n.language as keyof typeof locales];
  const handleChangeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className='fixed top-0 left-0 z-50 w-full shadow-xl bg-primaryBg'>
      <div className='flex items-center justify-between px-8 py-4'>
        <Link to={'/'} className='text-3xl font-semibold'>
          Movie<span className='text-primaryText'>Flix</span>
        </Link>
        <div className='flex items-center gap-3 text-lg font-medium'>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'text-primaryText' : 'text-white')}
          >
            {t('Home')}
          </NavLink>
          <NavLink
            to={'/phim'}
            className={({ isActive }) => (isActive ? 'text-primaryText' : 'text-white')}
          >
            {t('Movie')}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
