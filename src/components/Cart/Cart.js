import classes from './Cart.module.css';

function Cart({ children }) {
  return (
    <div className={classes['cart-wrapper']}>
      <div className={classes['cart-head']}>
        <p>Cart</p>
      </div>
      <div className={classes['cart-content']}>
        {
          children ? children : "Your cart is empty."
        }
      </div>
    </div>
  );
};

export default Cart;