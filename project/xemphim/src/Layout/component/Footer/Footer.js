import classNames from 'classnames/bind';
import style from './Footer.module.scss';

import { Link } from 'react-router-dom';
import config from '../../../config/index';

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <ul className={cx('list')}>
        <li className={cx('item', 'logo-brand')}>
          <h1 className={cx('brand')}>FC</h1>
          <Link to={config.routes.signup}>
            <button className={cx('join')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Join With Us
            </button>
          </Link>
        </li>
        <li className={cx('item', 'info-brand')}>
          <h3>About Us</h3>
          <Link to="/" className={cx('link')}>
            Information
          </Link>
          <Link to="/" className={cx('link')}>
            License
          </Link>
        </li>
        <li className={cx('item', 'legal')}>
          <h3>Terms of Use</h3>
          <Link to="/" className={cx('link')}>
            Terms of Use
          </Link>
          <Link to="/" className={cx('link')}>
            Privacy Policy
          </Link>
          <Link to="/" className={cx('link')}>
            Security
          </Link>
        </li>
        <li className={cx('item', 'social-brand')}>
          <h3>Social </h3>
          <Link to="/" className={cx('link')}>
            FaceBook
          </Link>
          <Link to="/" className={cx('link')}>
            Instagram
          </Link>
          <Link to="/" className={cx('link')}>
            Tiktok
          </Link>
        </li>
        <li className={cx('item', 'contact')}>
          <h3>Suport</h3>
          <Link to="/" className={cx('link')}>
            Contact
          </Link>
          <Link to="/" className={cx('link')}>
            Email
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
