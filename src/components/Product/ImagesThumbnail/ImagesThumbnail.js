import classes from './ImagesThumbnail.module.css';

function ImagesThumbnail({ showModal, images, onClick }) {
  

  return (
    <div className={classes['images-thumbnail-wrapper']}>
      {
        images.map(image =>  
          <img 
            key={image.id}
            id={image.id}
            className={classes['image-thumbnail']} 
            alt={image.id} 
            src={image.src}
            onClick={onClick} 
          />
        )
      }
    </div>
  )
}

export default ImagesThumbnail;