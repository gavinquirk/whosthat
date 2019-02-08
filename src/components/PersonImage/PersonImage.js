import React from 'react'
import classes from './PersonImage.module.css';

// Will receive imageURL from props

const personImage = (props) => (
  <div className={classes.PersonImage}>
    {/* TODO: Cropped and centered person image */}
    <img src="http://monumentfamilydentistry.com/wp-content/uploads/2015/11/user-placeholder.png" alt="User Placeholder"/>
  </div>
)

export default personImage