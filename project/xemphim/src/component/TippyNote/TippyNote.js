import classNames from 'classnames/bind';
import style from './TippyNote.module.scss';
import './TippyNoteCustome.css';

import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(style);

function TippyNote({ children, note, placement = 'bottom' }) {
  return (
    <div className={cx('wrapper')}>
      <Tippy content={note} placement={placement} interactive>
        {children}
      </Tippy>
    </div>
  );
}

export default TippyNote;
