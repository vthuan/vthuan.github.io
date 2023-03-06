import classNames from 'classnames/bind';
import style from './SignIn.module.scss';

import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { json, Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(style);

function SignIn() {
  const [Seepass, setSeePass] = useState(false);
  const [value, SetValue] = useState('');
  const [password, SetPassWord] = useState('');
  const [checkLenght, setCheckLenght] = useState(true);
  const [checkPassValid, setCheckPassValid] = useState(true);

  // Info SignIn
  const account = JSON.parse(localStorage.getItem('account'));

  const login = {
    ...account,
    username: value,
    password: password,
  };

  const handlesignin = () => {
    if (value === account.username && password === account.password) {
      localStorage.setItem('login', JSON.stringify(login));
      alert('Logged in successfully');
      window.location = config.routes.home;
    } else {
      alert('Login failed');
    }
  };

  const handleSeepass = () => {
    setSeePass(!Seepass);
  };

  // Rules
  const checkLength = (e) => {
    const value = e.target.value;
    SetValue(value);
    if (value.length >= 4 || value.length === 0) {
      setCheckLenght(true);
    } else {
      setCheckLenght(false);
    }
  };

  const checkPassWord = (e) => {
    const valuePass = e.target.value;
    SetPassWord(valuePass);
    const validPass = /^[A-Za-z]\w{7,14}$/;

    if (valuePass.match(validPass) || valuePass.length === 0) {
      setCheckPassValid(true);
    } else {
      setCheckPassValid(false);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2 className={cx('brand')}>Welcome to</h2>
        <h2>FATCAT Movie</h2>
      </div>

      <div className={cx('table-info')}>
        <label className={cx('name-account')}>
          <span className={cx('title-info')}>Username</span>
          <input
            onChange={checkLength}
            value={value}
            className={cx('input')}
            type="text"
            placeholder=" 4 charaters minimum"
          />
          <span className={cx('icon', checkLenght === false && 'icon-fixed')}>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className={cx('alert-error')}>{checkLenght === false && 'invalid (at least 4 charaters minimum)'}</span>
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Password {'(6 characters minimum)'}</span>
          <input
            value={password}
            onChange={checkPassWord}
            className={cx('input')}
            type={Seepass ? 'text' : 'password'}
            placeholder="6 characters minimum"
          />
          <span className={cx('see-pass', checkPassValid === false && 'see-fixed')} onClick={handleSeepass}>
            {Seepass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
          <span className={cx('icon', checkPassValid === false && 'icon-fixed')}>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <span className={cx('alert-error')}>{checkPassValid === false && 'invalid Password'}</span>
        </label>
      </div>

      <div className={cx('button')}>
        <div className={cx('create-account')}>
          <span className={cx('link-to-signin')}>
            If you haven't account, continue with{' '}
            <Link to={config.routes.signup} className={cx('link-to-signin-btn')}>
              Sign Up
            </Link>
          </span>
          <button className={cx('create-account-btn')} onClick={handlesignin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
