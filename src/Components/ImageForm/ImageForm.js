

import React, { useRef } from 'react'
import styles from "./ImageForm.module.css"

const AddImages = ({AddPhoto}) => {

  // Create a reference to the input element using `useRef
  let titleRef = useRef(null);
  let urlRef = useRef(null);

  // Create a state variable called `url` and set it
  function handleSubmit(e){
    e.preventDefault();

    // Create an object to hold our data using the refs
    const photoData = {
      title : titleRef.current.value,
      url: urlRef.current.value
    }

    AddPhoto(photoData); // pass this to the parent component instead of here

    // TODO - reset form fields after submission
    titleRef.current.value = "";
    urlRef.current.value = "";

  }


  return (
    <form 
        className={styles.addImageForm}
        onSubmit={handleSubmit} >
      <p className={styles.FromLabel} > Add image </p>
      <div className={styles.container}>
        <input placeholder='Title' ref={titleRef} />
        <input placeholder='Image Url' ref={urlRef}/>
        <div className={styles.buttonContainer} >
          <button className={styles.resetButton} 
          type='reset'> Clear </button>
          <button className={styles.submitButton} type='submit'> Create </button>
        </div>
      </div>
    </form>
  )
}

export default AddImages;
