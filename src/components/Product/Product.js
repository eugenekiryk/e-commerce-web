import { Fragment, useState, useContext } from 'react';

import { icons, images } from '../../assets';
import { Previous, Next } from '../UI/Arrows/Arrows';
import AppContext from '../../store/context';
import Button from '../UI/Button/Button';
import ImagesThumbnail from './ImagesThumbnail/ImagesThumbnail';
import Modal from '../UI/Modal/Modal';
import QuantityControls from '../UI/QuantityControls/QuantityControls';

import classes from './Product.module.css';

const getCurrentImage = (e, images) => images.find(image => image.id === e.target.id);

function Product() {
  const ctx = useContext(AppContext);
  const mobile = ctx.windowWidth <= 1024;

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [productQuantity, setProductQuantity] = useState(0);

  const productInfo = {
    id: 'product1',
    title: 'Fall Limited Edition Sneakers',
    price: 125,
    description: `
			These low-profile sneakers are your perfect casual wear companion. 
			Featuring a durable rubber outer sole, 
			they'll withstand everything the weather can offer.
		`,
    image: images[0].src
  };

  const openImageHandler = (e) => {
    const image = getCurrentImage(e, images);
    setCurrentImage(image);
  }

  const changeImageHandler = (idx) => {
    const currentIdx = images.findIndex(image => image.id === currentImage.id);
    const sumIdx = currentIdx + idx;
    const newImage = images[sumIdx];

    if (sumIdx >= images.length) {
      setCurrentImage(images[0]);
    } else if (sumIdx < 0) {
      setCurrentImage(images[images.length - 1]);
    } else {
      setCurrentImage(newImage);
    }
  };

  const showModalHandler = (e) => {
    const image = getCurrentImage(e, images);
    setCurrentImage(image);
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setCurrentImage(images[0]);
    setShowModal(false);
  }

  const quantityHandler = (quantity) => {
    setProductQuantity(prevQuantity => {
      if (prevQuantity === 0 && quantity < 0) {
        return prevQuantity;
      } else {
        return prevQuantity + quantity;
      }
    });
  }

  const addToCartHandler = () => {
    if (productQuantity === 0) {
      return;
    }

    const totalPrice = productInfo.price * productQuantity;
    ctx.onAddToCart(
      productInfo.id,
      productInfo.title,
      productQuantity,
      productInfo.price,
      totalPrice,
      productInfo.image
    );

    setProductQuantity(0);
  }

  return (
    <Fragment>
      <div className={classes['product-wrapper']}>
        <div className={classes['product-images']}>
          {
            mobile ? (
              <div className={classes['images-mobile']}>
                <Previous
                  className={classes['prev-mobile']}
                  onClick={() => changeImageHandler(-1)}
                />
                <img className={classes['main-image']} src={currentImage.src} alt={currentImage.id} />
                <Next
                  className={classes['next-mobile']}
                  onClick={() => changeImageHandler(1)}
                />
              </div>
            ) :
              <img className={classes['main-image']} src={images[0].src} alt={currentImage.id} />
          }
          <ImagesThumbnail
            showModal={showModal}
            images={images}
            onClick={(e) => showModalHandler(e)}
          />
        </div>
        <div className={classes['product-description']}>
          <p className={classes['company-title']}>SNEAKER COMPANY</p>
          <h1 className={classes['product-title']}>{productInfo.title}</h1>
          <p>
            {productInfo.description}
          </p>
          <div className={classes['price-wrapper']}>
            <h2 className={classes['product-price']}>
              $125.00 <span className={classes.discount}>50%</span>
            </h2>
            <p className={classes['price-before']}>$250.00</p>
          </div>
          <div className={classes['product-controls']}>
            <QuantityControls onQuantityChange={quantityHandler}>
              {productQuantity}
            </QuantityControls>
            <Button onClick={addToCartHandler}>
              <span>
                <img className={classes['cart-icon']} src={icons.IconCart} alt="cart-icon" />
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
              src={icons.IconClose}
              alt="close"
              onClick={closeModalHandler}
            />
            <Previous
              className={classes.prev}
              onClick={() => changeImageHandler(-1)}
            />
            <div className={classes['modal-image']}>
              <img src={currentImage.src} alt={currentImage.id} />
            </div>
            <Next
              className={classes.next}
              onClick={() => changeImageHandler(1)}
            />
            <ImagesThumbnail images={images} onClick={(e) => openImageHandler(e)} />
          </Modal>
        )
      }
    </Fragment>
  );
}

export default Product;
