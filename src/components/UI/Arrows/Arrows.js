import IconNext from '../../../assets/icon-next.svg';
import IconPrevious from '../../../assets/icon-previous.svg';

import classes from './Arrows.module.css';

export function Previous({ className, onClick }) {
  return (
    <div 
      className={`${classes['icon-prev']} ${className}`} 
      onClick={onClick}
    >
      <img src={IconPrevious} alt="previous" />
    </div>
  )
}

export function Next({ className, onClick }) {
  return (
    <div 
      className={`${classes['icon-next']} ${className}`} 
      onClick={onClick}
    >
      <img src={IconNext} alt="next" />
    </div>
  )
}