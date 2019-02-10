import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Navbar.module.css'

const navbar = (props) => (
  <header className={classes.Navbar}>
    <NavigationItems />
  </header>
)

export default navbar