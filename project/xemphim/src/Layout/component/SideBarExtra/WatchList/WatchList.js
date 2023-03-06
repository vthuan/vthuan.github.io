import classNames from 'classnames/bind';
import style from './WatchList.module.scss';

import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectId } from '../../../../store/IdStore';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function WatchList() {
  const i = useRef();
  const [item, setItem] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const id = useSelector(selectId);

  useEffect(() => {
    if (id === 0) {
      return;
    }

    const callItem = async () => {
      // if() {

      // }
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&append_to_response=videos`,
        )
        .then((res) => {
          setItem((pre) => [...pre, res.data]);
        });
    };
    callItem();
  }, [id]);

  const handleDelete = (id) => {
    const remove = item.filter((item) => item.id !== id);
    setItem(remove);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>Watch List</h2>
      </div>
      <div className={cx('list')}>
        {id !== 0 &&
          item.map((movie, index) => (
            <div className={cx('container')} id={movie.id} ref={i} key={index}>
              <div className={cx('poster')}>
                <img
                  className={cx('img')}
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </div>
              <div className={cx('info')}>
                <div className={cx('name')}>
                  <span>{movie.original_title}</span>
                </div>

                <div className={cx('vote')}>
                  <span className={cx('vote-user')}>{movie.vote_average}</span>

                  <button className={cx('delete-item')} onClick={() => handleDelete(movie.id)}>
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WatchList;
