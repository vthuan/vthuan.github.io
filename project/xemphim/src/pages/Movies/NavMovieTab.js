import classNames from 'classnames/bind';
import style from './Movies.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function NavMovieTab({ to, title }) {
  return (
    <NavLink to={to} end className={(nav) => cx('link-to', { active: nav.isActive })}>
      <h3 className={cx('title')}>{title}</h3>
    </NavLink>
  );
}

export default NavMovieTab;
