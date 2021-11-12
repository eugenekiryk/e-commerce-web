import { icons } from '../../../assets';

import classes from './Arrows.module.css';

export function Previous({ className, onClick }) {
  return (
    <div 
      className={`${classes['icon-prev']} ${className}`} 
      onClick={onClick}
    >
      <img src={icons.IconPrevious} alt="previous" />
    </div>
  )
}

export function Next({ className, onClick }) {
  return (
    <div 
      className={`${classes['icon-next']} ${className}`} 
      onClick={onClick}
    >
      <img src={icons.IconNext} alt="next" />
    </div>
  )
}