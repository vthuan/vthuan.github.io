import classNames from 'classnames/bind';
import style from './Modal.module.scss';

import { useState } from 'react';

const cx = classNames.bind(style);

function Modal({ children, customeCloseBtn = true, toogleclose }) {
  const [closeModal, setCloseModal] = useState(false);

  const handleCLoseModal = () => {
    setCloseModal(true);
  };

  return (
    <div id="modal" className={cx('wrapper', closeModal && 'close')}>
      <div className={cx('modal-content')} onClick={handleCLoseModal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
