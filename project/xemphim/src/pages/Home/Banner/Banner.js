import classNames from 'classnames/bind';
import style from './Banner.module.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SlickMovie from '../../../component/SlickMovie/SlickMovie';

const cx = classNames.bind(style);

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1',
      )
      .then((data) => {
        setBanner(data.data.results);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <SlickMovie quality={1} autoplay={true}>
        {banner
          .map((item, index) => (
            <div className={cx('banner-warpper')} key={index}>
              <h2 className={cx('title')}>{item.original_title}</h2>
              <figure className={cx('link')}>
                <Link to="/">
                  <img
                    alt="anh"
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    className={cx('img')}
                  />
                </Link>
              </figure>
            </div>
          ))
          .slice(0, 5)}
      </SlickMovie>
    </div>
  );
}

export default Banner;
