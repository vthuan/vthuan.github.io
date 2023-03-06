import classNames from 'classnames/bind';
import style from './UpComing.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../../../component/MovieCard/MovieCard';

const cx = classNames.bind(style);

function UpComing() {
  const [UpComing, setUpComing] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const Items = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page${page}`,
        );
        setUpComing((UpComing) => [...UpComing, ...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    Items();
  }, [page]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {UpComing.map((item, index) => (
          <MovieCard
            key={index}
            id={item.id}
            poster={item.poster_path}
            vote={item.vote_average}
            title={item.original_title}
            popularrity={item.popularity}
          />
        ))}
      </div>

      <div className={cx('load-more')}>
        <button onClick={handleLoadMore} className={cx('load-more-btn')}>
          {isLoading ? 'Loading..' : 'LOAD MORE'}
        </button>
      </div>
    </div>
  );
}

export default UpComing;
