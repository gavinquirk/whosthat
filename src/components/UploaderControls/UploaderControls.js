import React, { Component } from 'react'
import classes from './UploaderControls.module.css';

class UploaderControls extends Component {

  render () {

    const enabledQuestions = this.props.enabledQuestions.map(question =>
      <button className={classes.questionBtn} onClick={this.props.onToggleSelection}>{question.valueOf()}</button>
    )

    const disabledQuestions = this.props.disabledQuestions.map(question =>
      <button className={classes.questionBtn} onClick={this.props.onToggleSelection}>{question.valueOf()}</button>
    )

    
    // TODO: Fade out/in for toggled selections

    return (
      <div className={classes.UploaderControls}>
        {/* <h3 style={{textAlign: 'center'}}>Choose what you would like to ask</h3> */}
        <div className={classes.questionsArea}>
          <div className={classes.enabledQuestions}>
            {enabledQuestions}
          </div>
          <div className={classes.disabledQuestions}>
            {disabledQuestions}
          </div>
        </div>
        {/* <button onClick={this.props.postPersonHandler}>TEST SUBMIT</button> */}
      </div>
    )
  }
}

export default UploaderControls