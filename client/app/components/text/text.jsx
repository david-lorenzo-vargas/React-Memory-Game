import React from 'react';
import classnames from 'classnames/bind';
import styles from './text.scss';

const Text = (props) => {
  const {
    text,
    theme,
    size,
  } = props;

  const cx = classnames.bind(styles);

  return (
    <div>
      <span className={cx('text', {
        [`text--theme-${theme}`]: theme,
        [`text--size-${size}`]: size,
      })}>{text}</span>
    </div>
  );
};

export default Text;
