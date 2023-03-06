import axios from 'axios';
import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import style from './Favourite.module.scss';
import MovieBox from '../../component/MovieBox';
import { Responsive } from '../../Layout/DefaultLayout/DefaultLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Favourite() {
  const account = JSON.parse(localStorage.getItem('account'));
  const favourite = account.favourite_movie;
  const [currentFavourite, setCurrentFavourite] = useState(favourite);

  const { isMobile } = useContext(Responsive);

  const handleDelete = async (id) => {
    const remove = await currentFavourite.filter((item) => item.id !== id);
    setCurrentFavourite(remove);
    const update = {
      ...account,
      favourite_movie: remove,
    };

    return localStorage.setItem('account', JSON.stringify(update));
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Your Favourite</h2>
      </div>

      <div className={cx('container')}>
        <ul className={cx('list-fav')}>
          {!currentFavourite
            ? 'ADD SOME YOUR FAVOURITE MOVIE LIST'
            : currentFavourite.map((fav, index) => (
                <li className={cx('item-fav')} key={index}>
                  <MovieBox
                    id={fav.id}
                    interactive={false}
                    className={cx('favourite-item')}
                    poster={`https://image.tmdb.org/t/p/original${fav.poster_path}`}
                  />

                  <div className={cx('info-movie')}>
                    <h3 className={cx('title-movie')}>{fav.original_title}</h3>
                    <span className={cx('tag-line')}>{fav.tagline}</span>
                    <span className={cx('overview')}>{fav.overview}</span>
                  </div>

                  <button className={cx('delete-btn')} onClick={() => handleDelete(fav.id)}>
                    {isMobile ? <FontAwesomeIcon icon={faClose} /> : 'Delete'}
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default Favourite;
