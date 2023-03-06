import classNames from 'classnames/bind';
import style from './MovieBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import config from '../../config';
import { useDispatch } from 'react-redux';
import { updateIdWatchlist } from '../../store/IdStore';
import TippyNote from '../TippyNote/TippyNote';
import axios from 'axios';

const cx = classNames.bind(style);

function MoiveBox({ id, className = 'wrapper', poster, title, genres, interactive = true }) {
  const itemRef = useRef();
  const [openMenuChild, setOpenMenuChild] = useState(false);

  const account = JSON.parse(localStorage.getItem('account'));
  const dispatch = useDispatch();

  const handleGetIdForDetail = () => {
    const id = itemRef.current.id;
    localStorage.setItem('id_detail', JSON.stringify(id));
  };

  const handleGetIdWatchList = () => {
    const id = itemRef.current.id;
    dispatch(updateIdWatchlist(id));
  };

  const handleOpenMenuChild = () => {
    setOpenMenuChild(!openMenuChild);
  };

  const handleAddFavourite = async () => {
    const id = itemRef.current.id;
    setOpenMenuChild(false);
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&append_to_response=videos`,
        )
        .then((res) => {
          const favourite = account.favourite_movie.push(res.data);
          const update = { ...account, favourite };
          return localStorage.setItem('account', JSON.stringify(update));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cx(className)} ref={itemRef} id={id}>
      <div className={cx('backdrop')}>
        <Link className={cx('link-movie')} to={config.routes.movies + `${id}`} onClick={handleGetIdForDetail}>
          <img className={cx('backdrop-img')} alt="bdrop" src={poster} />
        </Link>
        {interactive && (
          <div className={cx('interactive')}>
            <div className={cx('menu-child')}>
              <button className={cx('menu-child-btn')} onClick={handleOpenMenuChild}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>

              {openMenuChild && (
                <div className={cx('menu-small')}>
                  <ul className={cx('menu-small-list')}>
                    <li className={cx('menu-small-item')} onClick={handleAddFavourite}>
                      Add to Favorite
                    </li>
                    <li className={cx('menu-small-item')}>Share</li>
                    <li className={cx('menu-small-item')}>optional</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={cx('add-list')}>
              <TippyNote note="Save to your watchlist">
                <button className={cx('add-list-btn')} onClick={handleGetIdWatchList}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </TippyNote>
            </div>
          </div>
        )}
      </div>
      <div className={cx('info-movie')}>
        <span className={cx('title-movie')}>{title}</span>
        <span className={cx('genres-movie')}>{genres}</span>
      </div>
    </div>
  );
}

export default MoiveBox;
