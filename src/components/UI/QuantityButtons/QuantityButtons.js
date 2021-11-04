import classes from './QuantityButtons.module.css';

function QuantityButtons({ children }) {
  return (
    <div className={classes['quantity-buttons']}>
      {children}
    </div>
  )
}

export default QuantityButtons;