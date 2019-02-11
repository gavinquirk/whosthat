import React from 'react'
import { Link } from 'react-router-dom'

import classes from './PersonBox.module.css'

const personBox = (props) => (
  <Link className={classes.PersonBox} to={"/person/" + props.personId}>
    <img src={props.imageUrl} />
  </Link>
)

export default personBox