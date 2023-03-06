import classNames from 'classnames/bind';
import style from './Popular.module.scss';

import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import { Link } from 'react-router-dom';
import config from '../../../../config';

const cx = classNames.bind(style);

function Popular() {
  const [popular, setPopular] = useState([]);
  const { isMobile, isTable } = useContext(Responsive);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/tv/popular?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1')
      .then((data) => {
        setPopular(data.data.results);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>TV : Popular</h2>
        <Link to={config.routes.popular_tv}>
          <span>See all</span>
        </Link>
      </div>
      <SlickMovie quality={isTable ? 3 : isMobile ? 2 : 5}>
        {popular.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              className={cx('popular')}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              slideScroll={5}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default Popular;
