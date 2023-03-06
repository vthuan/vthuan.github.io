import classNames from 'classnames/bind';
import style from './TopRated.module.scss';

import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import SlickMovie from '../../../../component/SlickMovie/SlickMovie';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Responsive } from '../../../../Layout/DefaultLayout/DefaultLayout';
import { Link } from 'react-router-dom';
import config from '../../../../config';

const cx = classNames.bind(style);

function TopRated() {
  const { isMobile, isTable } = useContext(Responsive);

  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/tv/top_rated?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1')
      .then((data) => {
        setTopRated(data.data.results);
      });
  }, []);

  return (
    <div className={cx('toprated-wrapper')}>
      <div className={cx('title')}>
        <h2>TV : Top Rated</h2>
        <Link to={config.routes.toprated_tv}>
          <span>See all</span>
        </Link>
      </div>
      <SlickMovie quality={isTable ? 3 : isMobile ? 2 : 5}>
        {topRated.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              title={item.original_title}
              slideScroll={5}
              vote={item.vote_average}
            />
          </div>
        ))}
      </SlickMovie>
    </div>
  );
}

export default TopRated;
