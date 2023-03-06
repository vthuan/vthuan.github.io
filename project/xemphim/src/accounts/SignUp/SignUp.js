import classNames from 'classnames/bind';
import style from './SignUp.module.scss';

import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(style);

function SignUp() {
  const [Seepass, setSeePass] = useState(false);
  const [value, setValue] = useState('');
  const [firstName, setFirtName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [passwordConfirm, SetPassWordConfirm] = useState('');
  const [checkEmailValid, setCheckEmailValid] = useState(true);
  const [checkLenght, setCheckLenght] = useState(true);
  const [checkPassValid, setCheckPassValid] = useState(true);
  const [checkPassConfirm, setCheckPassConfirm] = useState(true);
  const [agreeRules, setAgreeRules] = useState(false);

  // InFO SignUp
  const signup_info = {
    id: 1,
    username: value,
    first_name: firstName,
    last_name: lastName,
    password: password,
    email: email,
    sign_in: false,
    favourite_movie: [],
  };

  const setjson = window.JSON.stringify(signup_info);

  const handleSubmit = () => {
    if (
      (checkEmailValid === true) &
      (checkLenght === true) &
      (checkPassValid === true) &
      (agreeRules === true) &
      (checkPassConfirm === true)
    ) {
      localStorage.setItem('account', setjson);
      alert('Sign Up Success');
      window.location = config.routes.signin;
    } else {
      alert('Sign Up Failed');
      return;
    }
  };

  const handleSeepass = () => {
    setSeePass(!Seepass);
  };

  // Rules
  const checkLength = (e) => {
    const value = e.target.value;
    setValue(value);
    if (value.length >= 4 || value.length === 0) {
      setCheckLenght(true);
    } else {
      setCheckLenght(false);
    }
  };

  const ValueFirstName = (e) => {
    const value = e.target.value;
    setFirtName(value);
  };

  const ValuelasttName = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  const checkValidEmail = (e) => {
    const valueEmail = e.target.value;
    SetEmail(valueEmail);
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valueEmail.match(valid) || valueEmail.length === 0) {
      setCheckEmailValid(true);
    } else {
      setCheckEmailValid(false);
    }
  };

  const checkPassWord = (e) => {
    const valuePass = e.target.value;
    setPassWord(valuePass);
    const validPass = /^[A-Za-z]\w{7,14}$/;

    if (valuePass.match(validPass) || valuePass.length === 0) {
      setCheckPassValid(true);
    } else {
      setCheckPassValid(false);
    }
  };

  const checkPassWordConfirm = (e) => {
    const valuePassConfirm = e.target.value;
    SetPassWordConfirm(valuePassConfirm);

    if (valuePassConfirm === password || valuePassConfirm.length === 0) {
      setCheckPassConfirm(true);
    } else {
      setCheckPassConfirm(false);
    }
  };

  const handleAgreeRules = () => {
    setAgreeRules(!agreeRules);
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
          <span className={cx('icon', checkLenght === false && 'icon-fixed-username')}>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className={cx('alert-error')}>{checkLenght === false && 'invalid (at least 4 charaters minimum)'}</span>
        </label>

        <div className={cx('full-name')}>
          <label className={cx('first-name-account')}>
            <span className={cx('title-info')}>First Name</span>
            <input
              onChange={ValueFirstName}
              value={firstName}
              className={cx('input')}
              type="text"
              placeholder=" 4 charaters minimum"
            />
            <span className={cx('icon', checkLenght === false && 'icon-fixed')}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </label>

          <label className={cx('last-name-account')}>
            <span className={cx('title-info')}>Last Name</span>
            <input
              onChange={ValuelasttName}
              value={lastName}
              className={cx('input')}
              type="text"
              placeholder=" 4 charaters minimum"
            />
            <span className={cx('icon', checkLenght === false && 'icon-fixed')}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </label>
        </div>

        <label className={cx('email-account')}>
          <span className={cx('title-info')}>Email</span>
          <input
            onChange={checkValidEmail}
            value={email}
            className={cx('input')}
            type="email"
            placeholder=" abc@gmail.com"
          />
          <span className={cx('icon', checkEmailValid === false && 'icon-fixed-email')}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className={cx('alert-error')}>{checkEmailValid === false && 'invalid Email'}</span>
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
          <span className={cx('icon', checkPassValid === false && 'icon-fixed-password')}>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <span className={cx('alert-error')}>{checkPassValid === false && 'invalid Password'}</span>
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Password Confirm</span>
          <input
            className={cx('input')}
            type={Seepass ? 'text' : 'password'}
            value={passwordConfirm}
            onChange={checkPassWordConfirm}
            placeholder="6 characters minimum"
          />
          <span className={cx('see-pass', checkPassConfirm === false && 'see-fixed')} onClick={handleSeepass}>
            {Seepass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
          <span className={cx('icon', checkPassConfirm === false && 'icon-fixed-pass-confirm')}>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <span className={cx('alert-error')}>{checkPassConfirm === false && 'Password Confirm does not match '}</span>
        </label>
      </div>

      <div className={cx('button')}>
        <div className={cx('check-condition')}>
          <input className={cx('check')} type="checkbox" onClick={handleAgreeRules} />
          <span className={cx('text-condition')}>
            I have read and agree to the FCM <Link className={cx('link-to-terms-of-use')}>terms of use</Link> and{' '}
            <Link className={cx('link-to-privacy')}>privacy policy</Link>.
          </span>
        </div>
        <div className={cx('create-account')}>
          <input className={cx('create-account-btn')} type="submit" value="Create Account" onClick={handleSubmit} />
          <span className={cx('link-to-signin')}>
            If you have account, continue with{' '}
            <Link to={config.routes.signin} className={cx('link-to-signin-btn')}>
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
