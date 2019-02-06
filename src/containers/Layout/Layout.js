import React, { Component } from 'react'
import classes from './Layout.module.css'

import Navbar from '../../components/Navigation/Navbar/Navbar'





class Layout extends Component {

  render () {

    return (
      <>
        {/* <SideDrawer /> */}
        <main className={classes.Layout}>
          <Navbar />
          {this.props.children}
        </main>
      </>
    )



  }






}

export default Layout