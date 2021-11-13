import { Fragment, useContext } from 'react';
import { icons } from '../../assets';
import AppContext from '../../store/context';
import Button from '../UI/Button/Button';
import classes from './Cart.module.css';

function Cart() {
  const ctx = useContext(AppContext);

  const removeItemHandler = (id) => {
    ctx.onRemoveFromCart(id);
  }

  const cartEmpty = ctx.cartItems.length === 0;

  return (
    <div className={classes['cart-wrapper']}>
      <div className={classes['cart-head']}>
        <p>Cart</p>
      </div>
      <div 
        className={classes['cart-content']}>
        {
          cartEmpty ? 
            "Your cart is empty." 
          : 
          <Fragment>
            {ctx.cartItems.map(item => {
              return (
                <div key={item.product} className={classes['cart-item']}>
                  <div className={classes['cart-item-inner']}>
                    <div className={classes['cart-item-img']}>
                      <img src={item.image} alt="img" />
                    </div>
                    <div className={classes['cart-item-info']}>
                      <p>{item.product}</p>
                      <p>
                        ${item.price.toFixed(2)} x {item.quantity} <span className={classes['price-total']}>${item.priceTotal.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes['remove-item']} 
                    onClick={() => removeItemHandler(item.id)}
                  >
                    <img src={icons.IconDelete} alt='remove' />
                  </div>
                </div>
              )
            })}
            <Button 
              className={classes['cart-button']}
            >
              Checkout
            </Button>
          </Fragment>
        }
      </div>
    </div>
  );
};

export default Cart;