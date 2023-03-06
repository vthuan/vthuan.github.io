import classNames from 'classnames/bind';
import style from './Movies.module.scss';

import config from '../../config/index';
import NavMovieTab from './NavMovieTab';

const cx = classNames.bind(style);

function Movies({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('tab')}>
        <div className={cx('name-tab')}>
          <h2>Movies</h2>
        </div>
        <div className={cx('tab-movies')}>
          <NavMovieTab to={config.routes.popular_movie} title="Popular" />
          <NavMovieTab to={config.routes.nowplaying_movie} title="Now Playing" />
          <NavMovieTab to={config.routes.upcoming_movie} title="Up Coming" />
          <NavMovieTab to={config.routes.toprated_movie} title="Top Rated" />
        </div>

        <div className={cx('filter-category')}>
          <div className={cx('filter')}>
            <button className={cx('filter-btn')}>Filter</button>
          </div>
        </div>
      </div>

      <div className={cx('content')}>{children}</div>
    </div>
  );
}

export default Movies;
