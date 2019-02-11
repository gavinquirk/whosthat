import React, { Component } from 'react'
import classes from './UploaderControls.module.css';

class UploaderControls extends Component {

  render () {

    const enabledQuestions = this.props.enabledQuestions.map(question =>
      <button className={[classes.questionBtn, classes.newQuestion].join(' ')} onClick={this.props.onToggleSelection}>{question.valueOf()}</button>
    )

    const disabledQuestions = this.props.disabledQuestions.map(question =>
      <button className={[classes.questionBtn, classes.newQuestion].join(' ')} onClick={this.props.onToggleSelection}>{question.valueOf()}</button>
    )

    return (
      <div className={classes.UploaderControls}>
        <div className={classes.questionsArea}>
          <div className={classes.enabledQuestions}>
            <div className={classes.questionsHeader}><h3>Your Questions</h3></div>
            {enabledQuestions}
          </div>
          <div className={classes.disabledQuestions}>
            <div className={classes.questionsHeader}><h3>Suggestions</h3></div>
            {disabledQuestions}
          </div>
        </div>
      </div>
    )
  }
}

export default UploaderControls