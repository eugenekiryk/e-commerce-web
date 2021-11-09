import { Fragment, useState, useContext } from 'react';

import AppContext from '../../store/context';
import Button from '../UI/Button/Button';
import ImagesThumbnail from './ImagesThumbnail/ImagesThumbnail';
import CartIcon from '../../assets/icon-cart.svg';
import IconClose from '../../assets/icon-close.svg';
import IconPlus from '../../assets/icon-plus.svg';
import IconMinus from '../../assets/icon-minus.svg';
import { Previous, Next } from '../UI/Arrows/Arrows';
import Modal from '../UI/Modal/Modal';
import { images } from './images';

import classes from './Product.module.css';
import QuantityButtons from '../UI/QuantityButtons/QuantityButtons';

function Product() {
	const ctx = useContext(AppContext);
	const mobile = ctx.windowWidth <= 1024;

	const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

	return (
		<Fragment>
			<div className={classes['product-wrapper']}>
				<div className={classes['product-images']}>
					{
						mobile ? (
							<div className={classes['images-mobile']}>
								<Previous className={classes['prev-mobile']} />
								<img className={classes['main-image']} src={images[0].src} alt="img1" />
								<Next className={classes['next-mobile']} />
							</div>
						) : 
							<img className={classes['main-image']} src={images[0].src} alt="img1" />
					}
					<ImagesThumbnail 
						showModal={showModal} 
						images={images} 
						onClick={showModalHandler} 
					/>
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
							<span>
								<img className={classes['cart-icon']} src={CartIcon} alt="cart-icon" />
							</span>
							Add To Cart
						</Button>
					</div>
				</div>
			</div>
			{
				(showModal && !mobile) && (
					<Modal onClose={closeModalHandler}>
						<img 
							className={classes['modal-close']} 
							src={IconClose} 
							alt="close"
							onClick={closeModalHandler} 
						/>
						<Previous className={classes.prev} />
						<div className={classes['modal-image']}>
							<img src={images[0].src} alt="img1" />
						</div>
						<Next className={classes.next} />
						<ImagesThumbnail images={images} />
					</Modal>
				)
			}
		</Fragment>
	);
}

export default Product;
