import { icons } from '../../../assets';
import classes from './QuantityControls.module.css';

function QuantityControls({ children }) {
  return (
    <div className={classes['quantity-buttons']}>
      <img src={icons.IconMinus} alt="minus" />
      {children}
      <img src={icons.IconPlus} alt="plus" />
    </div>
  )
}

export default QuantityControls;