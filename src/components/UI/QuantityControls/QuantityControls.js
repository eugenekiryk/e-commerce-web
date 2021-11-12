import { icons } from '../../../assets';
import classes from './QuantityControls.module.css';

function QuantityControls({ children, onQuantityChange }) {
  return (
    <div className={classes['quantity-buttons']}>
      <img src={icons.IconMinus} alt="minus" onClick={() => onQuantityChange(-1)} />
      {children}
      <img src={icons.IconPlus} alt="plus" onClick={() => onQuantityChange(1)} />
    </div>
  )
}

export default QuantityControls;