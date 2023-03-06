import classNames from 'classnames/bind';
import style from './SideBarExtra.module.scss';

import NowPlaying from '../../../pages/Home/Movie/NowPlaying/NowPlaying';
import WatchList from './WatchList/WatchList';
import MenuItem from '../Sidebar/MenuItem';
import config from '../../../config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function SideBarExtra() {
  const account = JSON.parse(localStorage.getItem('login'));

  // console.log(account[0].username);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('account')}>
        {/* <span className={cx('name')}>{!account ? 'Username' : account.username}</span>
         */}
        {account ? (
          <span className={cx('name-user')}>
            {account.first_name} {account.last_name}
          </span>
        ) : (
          <Link className={cx('link-to-signin')} to={config.routes.signin}>
            <span>Login</span>
          </Link>
        )}

        <img
          className={cx('account-avar')}
          alt="anh"
          src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
        />
      </div>

      <div className={cx('container')}>
        <div className={cx('content')}>
          <NowPlaying />
          <div className={cx('watch-list')}>
            <WatchList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarExtra;
