import ImgThumb1 from '../../../assets/image-product-1-thumbnail.jpg';
import ImgThumb2 from '../../../assets/image-product-2-thumbnail.jpg';
import ImgThumb3 from '../../../assets/image-product-3-thumbnail.jpg';
import ImgThumb4 from '../../../assets/image-product-4-thumbnail.jpg';

import classes from './ImagesThumbnail.module.css';

function ImagesThumbnail() {
  return (
    <div className={classes['images-thumbnail-wrapper']}>
      <img className={classes['image-thumbnail']} src={ImgThumb1} alt="img-thumb-1" />
      <img className={classes['image-thumbnail']} src={ImgThumb2} alt="img-thumb-2" />
      <img className={classes['image-thumbnail']} src={ImgThumb3} alt="img-thumb-3" />
      <img className={classes['image-thumbnail']} src={ImgThumb4} alt="img-thumb-4" />
    </div>
  )
}

export default ImagesThumbnail;