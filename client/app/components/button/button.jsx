import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const Button = (props) => {
  const {
    text,
    theme,
    size,
    onClick,
  } = props;

  const cx = classnames.bind(styles);

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleButtonClick}
      className={cx('button', {
        [`button--theme-${theme}`]: theme,
        [`button--size-${size}`]: size,
      })}
    >
      <span>{text}</span>
    </div>
  );
};

export default Button;
