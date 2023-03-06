import classNames from 'classnames/bind';
import style from './Account.module.scss';

import { useState } from 'react';

const cx = classNames.bind(style);

function Account() {
  // Current Profile
  const account = JSON.parse(localStorage.getItem('account'));

  //State
  // State handle
  const [editProfile, setEditProfile] = useState(true);
  const [changePassword, setChangePassword] = useState(false);

  // Infomation Account
  const [avatar, setAvatar] = useState();
  const [firstName, setFirtName] = useState(account.first_name);
  const [lastName, setLastName] = useState(account.last_name);
  const [dateOfBirth, setDateOfBirth] = useState(account.date_of_birth);
  const [gender, setGender] = useState(account.gender);
  const [address, setAddress] = useState(account.address);
  const [city, setCity] = useState(account.city);
  const [email, setEmail] = useState(account.email);
  const [contact, setContact] = useState(account.contact);
  const [password, setPassWord] = useState('');
  const [passwordConfirm, SetPassWordConfirm] = useState('');

  const updateProfile = {
    ...account,
    first_name: firstName,
    last_name: lastName,
    contact: contact,
    date_of_birth: dateOfBirth,
    gender: gender,
    address: address,
    city: city,
    email: email,
  };

  const handleSaveChange = () => {
    localStorage.setItem('account', JSON.stringify(updateProfile));
    localStorage.setItem('login', JSON.stringify(updateProfile));
    alert('Changes Success');
    window.location.reload();
  };

  // HANDLE EDIT INFOMATION ACCOUNT

  const EditAvatar = (e) => {
    const value = e.target.file;
    setAvatar(value);
  };

  const EditFirstName = (e) => {
    const value = e.target.value;
    setFirtName(value);
  };

  const EditLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  const EditDayOfBirth = (e) => {
    const value = e.target.value;
    setDateOfBirth(value);
  };

  const EditGender = (e) => {
    const value = e.target.value;
    setGender(value);
  };

  const EditCity = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const EditAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
  };

  const EditEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const EditContact = (e) => {
    const value = e.target.value;
    setContact(value);
  };
  const EditPassword = (e) => {
    const value = e.target.value;
    setPassWord(value);
  };

  // /////////////////////////

  const openEditProfile = () => {
    setEditProfile(true);
    setChangePassword(false);
  };

  const openChangePassword = () => {
    setEditProfile(false);
    setChangePassword(true);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <div className={cx('avartar')}>
          <img
            id="img"
            className={cx('avatar-img')}
            alt="avatar"
            src={
              avatar
                ? avatar
                : '	https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg'
            }
          />
        </div>
        <div className={cx('full-name')}>
          <h1 className={cx('full-name-text')}>
            {account.first_name} {account.last_name}
          </h1>
        </div>
      </div>

      <div className={cx('edit-profile')}>
        <div className={cx('nav-edit')}>
          <ul className={cx('nav-list')}>
            <li className={cx('nav-item-edit-profile', editProfile && 'active')} onClick={openEditProfile}>
              Edit Your Profile
            </li>
            <li className={cx('nav-item-change-pass-word', changePassword && 'active')} onClick={openChangePassword}>
              Change Your Password
            </li>
          </ul>
        </div>

        {editProfile && (
          <div>
            <div className={cx('edit-name')}>
              <div className={cx('first-name')}>
                <label>First Name</label>
                <input className={cx('input')} type="text" value={firstName} onChange={EditFirstName} />
              </div>
              <div className={cx('last-name')}>
                <label>Last Name</label>
                <input className={cx('input')} type="text" value={lastName} onChange={EditLastName} />
              </div>
            </div>

            <div className={cx('edit-age-and-gender')}>
              <div className={cx('date-of-birth')}>
                <label>Date of Birth</label>
                <input className={cx('input')} type="date" value={dateOfBirth} onChange={EditDayOfBirth} />
              </div>
              <div className={cx('edit-gender')}>
                <label>Gender</label>
                <select id="gender" className={cx('list-gender')} value={gender} onChange={EditGender}>
                  <option>-- Gender --</option>
                  <option>Male</option>
                  <option>FeMale</option>
                </select>
              </div>
            </div>

            <div className={cx('edit-info')}>
              <div className={cx('edit-address')}>
                <label>Address</label>
                <input className={cx('input')} type="text" value={address} onChange={EditAddress} />
              </div>

              <div className={cx('edit-city')}>
                <label>City</label>
                <input className={cx('input')} type="text" value={city} onChange={EditCity} />
              </div>
            </div>
            <div className={cx('edit-contact')}>
              <div className={cx('edit-email')}>
                <label>Email</label>
                <input className={cx('input')} type="email" value={email} onChange={EditEmail} />
              </div>

              <div className={cx('edit-phone-number')}>
                <label>Contact</label>
                <input className={cx('input')} type="number" value={contact} onChange={EditContact} />
              </div>
            </div>
          </div>
        )}

        {changePassword && (
          <div className={cx('edit-password')}>
            <div className={cx('change-password')}>
              <label>Password</label>
              <input className={cx('input')} type="password" value={password} onChange={EditPassword} />
            </div>

            <div className={cx('new-password')}>
              <label>New Password</label>
              <input className={cx('input')} type="password" value={password} onChange={EditPassword} />
            </div>

            <div className={cx('change-password-confirm')}>
              <label>Password Confirm</label>
              <input className={cx('input')} type="password" />
            </div>
          </div>
        )}
      </div>

      <div className={cx('save-change')}>
        <button className={cx('cancel-btn')}>Cancel</button>
        <button className={cx('save-btn')} onClick={handleSaveChange}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Account;
