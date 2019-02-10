import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'

import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact >Home</NavigationItem>
        <NavigationItem link="/upload" >New Post</NavigationItem>
  </ul>
)

export default navigationItems