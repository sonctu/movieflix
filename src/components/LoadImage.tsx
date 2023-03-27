import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getPathImage, resizeImage } from '~/utils/constants';

interface IProps {
  image: {
    thumb_url: string;
    poster_url: string;
    name?: string;
  };
  className?: string;
}

const LoadImage: FC<IProps> = ({ image, className = '' }) => {
  return (
    <LazyLoadImage
      src={resizeImage(getPathImage(image.thumb_url || image.poster_url), '300', '300')}
      alt={image.name}
      className={`object-cover w-full h-full rounded-xl ${className}`}
    />
  );
};

export default LoadImage;
