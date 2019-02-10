import React from 'react'
import classes from './PersonImage.module.css';

// Will receive imageURL from props

const personImage = (props) => (
  <div className={classes.PersonImage}>
    {/* TODO: Cropped and centered person image */}
    <img src={props.imageUrl} alt="Person"/>
  </div>
)

export default personImage