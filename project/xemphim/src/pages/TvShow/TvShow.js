import classNames from 'classnames/bind';
import style from './TvShow.module.scss';

import config from '../../config/index';
import NavMovieTab from '../Movies/NavMovieTab';

const cx = classNames.bind(style);

function TvShow({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('tab')}>
        <div className={cx('name-tab')}>
          <h2>Tv Show</h2>
        </div>
        <div className={cx('tab-movies')}>
          <NavMovieTab to={config.routes.popular_tv} title="Popular" />
          <NavMovieTab to={config.routes.nowplaying_tv} title="Now Playing" />
          <NavMovieTab to={config.routes.upcoming_tv} title="Up Coming" />
          <NavMovieTab to={config.routes.toprated_tv} title="Top Rated" />
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

export default TvShow;
