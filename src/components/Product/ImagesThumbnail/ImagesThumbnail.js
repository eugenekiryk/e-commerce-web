import classes from './ImagesThumbnail.module.css';

function ImagesThumbnail({ showModal, images, onClick }) {
  

  return (
    <div className={classes['images-thumbnail-wrapper']}>
      {
        images.map((image, idx) => idx !== 0 && 
          <img 
            key={image.alt}
            className={classes['image-thumbnail']} 
            alt={image.alt} 
            src={image.src}
            onClick={!showModal ? onClick : null} 
          />
        )
      }
    </div>
  )
}

export default ImagesThumbnail;