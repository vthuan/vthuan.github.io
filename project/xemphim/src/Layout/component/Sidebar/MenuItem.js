import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuItem({ icon, title, to }) {
  return (
    <NavLink
      to={to}
      end
      className={(nav) => cx('link-to', { active: nav.isActive })}
      onClick={() => {
        window.scrollTo({ top: '0', behavior: 'smooth' });
      }}
    >
      <li className={cx('list-item')}>
        <span className={cx('icon')}>{icon}</span>
        <h3 className={cx('title')}>{title}</h3>
      </li>
    </NavLink>
  );
}

export default MenuItem;
