import classNames from 'classnames/bind';
import style from './MovieCard.module.scss';

import MovieBox from '../MovieBox/MovieBox';

const cx = classNames.bind(style);

function MovieCard({ id, poster, vote, title, popularrity }) {
  return (
    <div className={cx('item')}>
      <MovieBox id={id} className={cx('popular')} poster={`https://image.tmdb.org/t/p/original${poster}`} vote={vote} />

      <div className={cx('info-movie')}>
        <a className={cx('link')} href="none">
          <span className={cx('movie-name')}>{title}</span>
        </a>
        <span className={cx('popularity')}>{popularrity}</span>
      </div>
    </div>
  );
}

export default MovieCard;
