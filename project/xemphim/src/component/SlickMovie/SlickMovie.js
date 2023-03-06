import classNames from 'classnames/bind';
import style from './SlickMovie.module.scss';
import '../SlickMovie/SlickMovie.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(style);

function SlickMovie({ quality = 5, children, slideScroll = 1, autoplay = false }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: autoplay,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToShow: quality,
    slidesToScroll: slideScroll,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div className={cx('slick-movie')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SlickMovie;
