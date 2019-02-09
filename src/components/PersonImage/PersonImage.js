import React from 'react'
import classes from './PersonImage.module.css';

// Will receive imageURL from props

const personImage = (props) => (
  <div className={classes.PersonImage}>
    {/* TODO: Cropped and centered person image */}
    <img src="https://ucarecdn.com/743450a8-40ff-4d6b-8c77-d63d8ea73cd4/ross.jpg" alt="Person"/>
  </div>
)

export default personImage