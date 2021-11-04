import Image1 from '../../assets/image-product-1.jpg';
import Button from '../UI/Button/Button';
import ImagesThumbnail from './ImagesThumbnail/ImagesThumbnail';
import CartIcon from '../../assets/icon-cart.svg';
import IconPlus from '../../assets/icon-plus.svg';
import IconMinus from '../../assets/icon-minus.svg';

import classes from './Product.module.css';
import QuantityButtons from '../UI/QuantityButtons/QuantityButtons';

function Product() {
	return (
		<div className={classes['product-wrapper']}>
			<div className={classes['product-images']}>
				<img className={classes['main-image']} src={Image1} alt="img1" />
				<ImagesThumbnail />
			</div>
			<div className={classes['product-description']}>
				<p className={classes['company-title']}>SNEAKER COMPANY</p>
				<h1 className={classes['product-title']}>Fall Limited Edition Sneakers</h1>
				<p>
					These low-profile sneakers are your perfect casual wear companion. 
					Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
				</p>
				<div className={classes['price-wrapper']}>
					<h2 className={classes['product-price']}>
						$125.00 <span className={classes.discount}>50%</span>
					</h2>
					<p className={classes['price-before']}>$250.00</p>
				</div>
				<div className={classes['product-controls']}>
					<QuantityButtons>
						<img src={IconMinus} alt="minus" />
						0
						<img src={IconPlus} alt="plus" />
					</QuantityButtons>
					<Button>
						<span><img className={classes['cart-icon']} src={CartIcon} alt="cart-icon" /></span>
						Add To Cart
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Product;
