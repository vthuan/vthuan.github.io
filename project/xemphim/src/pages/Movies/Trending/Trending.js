import classNames from 'classnames/bind';
import style from './Trending.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MoiveBox from '../../../component/MoiveBox/MoiveBox';

const cx = classNames.bind(style);

function Trending() {
  const [trending, setTreding] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267')
      .then((data) => {
        setTreding(data.data.results);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {trending.map((item, index) => (
          <div className={cx('item')} key={index}>
            <MoiveBox
              id={item.id}
              className={cx('popular')}
              poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              slideScroll={5}
            />

            <div className={cx('info-movie')}>
              <span className={cx('movie-name')}>{item.original_title}</span>
              <span className={cx('popularity')}>{item.popularity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
