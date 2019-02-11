import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Navbar.module.css'

const navbar = (props) => (
  <header className={classes.Navbar}>
    <div>LOGO</div>
    <NavigationItems />
  </header>
)

export default navbar