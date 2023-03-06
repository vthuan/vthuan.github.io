import classNames from 'classnames/bind';
import style from './Header.module.scss';

import { faBars, faBell, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search/Search';
import { Fragment, useContext, useState } from 'react';
import { Responsive } from '../../DefaultLayout/DefaultLayout';
import Sidebar from '../Sidebar/Sidebar';

const cx = classNames.bind(style);

function Header() {
  const { isMobile } = useContext(Responsive);
  const [openSideBarMobile, setOpenSideBarMobile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSideBarMobile = () => {
    setOpenSideBarMobile(!openSideBarMobile);
  };

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          {isMobile && (
            <span className={cx('icon-open-menu')} onClick={handleOpenSideBarMobile}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          )}
          {/* {openSideBarMobile && (
            <Modal>
              <Sidebar openonmobile={'open-side-bar-mobile'} />
            </Modal>
          )} */}
          <div className={cx(openSideBarMobile ? 'showmodal' : 'closemodal')}>
            <div className={cx('content')} onClick={() => setOpenSideBarMobile(false)}>
              <Sidebar openonmobile={openSideBarMobile && 'open-side-bar-mobile'} />
            </div>
          </div>
        </div>

        <div className={cx('option')}>
          {isMobile ? <Fragment>{openSearch && <Search />}</Fragment> : <Search />}

          <div className={cx('user')}>
            {isMobile && (
              <span className={cx('icon-search', openSearch && 'fixed')} onClick={handleOpenSearch}>
                {openSearch ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faSearch} />}
              </span>
            )}
            <div className={cx('notice')}>
              <button className={cx('notice-icon')}>
                <span className={cx('title-notice')}>Notice</span>
                <FontAwesomeIcon icon={faBell} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
