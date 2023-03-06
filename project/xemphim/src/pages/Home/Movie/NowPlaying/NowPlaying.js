import classNames from 'classnames/bind';
import style from './NowPlaying.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieBox from '../../../../component/MovieBox/MovieBox';
import { Link } from 'react-router-dom';
import config from '../../../../config';

const cx = classNames.bind(style);

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1',
      )
      .then((data) => {
        setNowPlaying(data.data.results);
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Movies : Now Playing</h2>
      </div>

      {nowPlaying
        .map((item, index) => (
          <div className={cx('item')} key={index}>
            <MovieBox
              id={item.id}
              className={cx('now-playing')}
              heart={false}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              slideScroll={5}
              interactive={false}
            />

            <div className={cx('info')}>
              <span className={cx('name-movie')}>{item.title}</span>
              <span className={cx('vote')}>{item.vote_average}</span>
            </div>
          </div>
        ))
        .slice(0, 3)}

      <div className={cx('see-more')}>
        <button className={cx('see-more-btn')}>
          <Link className={cx('see-more-link')} to={config.routes.nowplaying_movie}>
            See More
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NowPlaying;
