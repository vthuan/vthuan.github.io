import classNames from 'classnames/bind';
import style from './UpComing.module.scss';

import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import config from '../../../../config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function UpComing() {
  const { isMobile, isTable } = useContext(Responsive);

  const [UpComing, setUpComing] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1')
      .then((data) => {
        setUpComing(data.data.results);
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Up Coming</h2>
        <Link to={config.routes.upcoming_movie}>
          <span>See all</span>
        </Link>
      </div>
      <SlickMovie quality={isTable ? 3 : isMobile ? 2 : 5}>
        {UpComing.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              sssssssssss
              slideScroll={5}
              vote={item.vote_average}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default UpComing;
