

import React from 'react'
import styles from "./ImageViewer.module.css"

function ImageViewer({imageUrl, handleImageView, handleNextImage, handlePrevImage}) {

  return (
    <section className={styles.ImageViewSection}>
      <div className={styles.ImageController}>
        <div 
          className={styles.prevButton}
          onClick={handlePrevImage}> &#10095; </div>
        <div 
          className={styles.ImageView} >
          <img src={imageUrl} />
        </div>
        <div 
          className={styles.nextButton} 
          onClick={handleNextImage}> &#10095; </div>
        <div className={styles.exitButton}
          onClick={handleImageView}> X </div>
      </div>
    </section>
  )
}

export default ImageViewer;
