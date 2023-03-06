import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import './DefaultLayout.css';

import Sidebar from '../component/Sidebar/Sidebar';
import Header from '../component/Header/Header';
import SideBarExtra from '../component/SideBarExtra/SideBarExtra';
import Footer from '../component/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import { createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

export const Responsive = createContext();

function DefaultLayout({ children }) {
  // Responsive
  const isTable = useMediaQuery({ query: '(min-width: 740px) and (max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 740px)' });

  // InfoAccount;

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Responsive.Provider value={{ isMobile, isTable }}>
      <div className={cx('main')}>
        <Sidebar />
        <div className={cx('container')}>
          <Header />
          <div className={cx('content')}>
            {/* <div class="reload" /> */}
            {children}
          </div>
          <div className={cx('footer')}>
            <Footer />
          </div>
        </div>
        <SideBarExtra />

        <div className={cx('scroll-to-top')}>
          <button className={cx('scroll-to-top-btn')} onClick={ScrolltoTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </Responsive.Provider>
  );
}

export default DefaultLayout;
