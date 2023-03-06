import classNames from 'classnames/bind';
import style from './Home.module.scss';

// Movie
import MvBanner from './Banner/Banner';
import MvTopRated from '../Home/Movie/TopRated/TopRated';
import MvUpComing from '../Home/Movie/UpComing/UpComing';
import MvPopular from '../Home/Movie/Popular/Popular';
import Trending from '../Home/Movie/Trending/Trending';

// Tv
import TvPopular from '../Home/TvShow/Popular/Popular';
import TvTopRated from '../Home/TvShow/TopRated/TopRated';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper')}>
      {/* Movie */}
      <MvBanner />
      <MvTopRated />
      <Trending />
      <MvUpComing />
      <MvPopular />

      {/* TV */}
      <TvPopular />
      <TvTopRated />
    </div>
  );
}

export default Home;
