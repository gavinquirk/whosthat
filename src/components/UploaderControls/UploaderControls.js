import React, { Component } from 'react'
import classes from './UploaderControls.module.css';

// Will receive imageURL from props

class UploaderControls extends Component {

  render () {

    let questionSelectors = []

    return (
      <div className={classes.UploaderControls}>
        <h3 style={{textAlign: 'center'}}>Choose what you would like to ask</h3>
        <p>What is this persons name?</p>
        <p>What is this persons age?</p>
        <p>What is this persons occupation?</p>
        <p>Would you be friends with this person?</p>
        <button onClick={this.props.postPersonHandler}>TEST SUBMIT</button>
      </div>
    )

  }
}

export default UploaderControls