import React, { Component } from 'react'
import classes from './UploaderControls.module.css';

// Will receive imageURL from props

// Global Array of Questions
const questions = [
  "What is this persons name?",
  "What is this persons age?",
  "What is this persons occupation?",
  "Would you be friends with this person?"
]

class UploaderControls extends Component {

  state = {
    enabledQuestions: questions,
    disabledQuestions: ["test"]
  }

  toggleSelectionHandler = (event) => {
    // TODO: Should this be done immutably?
    const oldEnabledQuestions = this.state.enabledQuestions
    const oldDisabledQuestions = this.state.disabledQuestions

    // If the enabled array already contains the selection
    if (this.state.enabledQuestions.includes(event.target.innerText)) {
      // Remove it from the enabled array
      var newEnabledQuestions = oldEnabledQuestions.filter(e => e !== event.target.innerText)
      // Add it to the disabled array
      var newDisabledQuestions = oldDisabledQuestions.concat(event.target.innerText)
      // Update State
      this.setState({ enabledQuestions: newEnabledQuestions, disabledQuestions: newDisabledQuestions})

    } else if (this.state.disabledQuestions.includes(event.target.innerText)) {
      const newDisabledQuestions = oldDisabledQuestions.filter(e => e !== event.target.innerText)
      const newEnabledQuestions = oldEnabledQuestions.concat(event.target.innerText)
      this.setState({ enabledQuestions: newEnabledQuestions, disabledQuestions: newDisabledQuestions})
    }
  }

  render () {

    const enabledQuestions = this.state.enabledQuestions.map(question =>
      <button className={classes.questionBtn} onClick={this.toggleSelectionHandler}>{question.valueOf()}</button>
    )

    const disabledQuestions = this.state.disabledQuestions.map(question =>
      <button className={classes.questionBtn} onClick={this.toggleSelectionHandler}>{question.valueOf()}</button>
    )


    return (
      <div className={classes.UploaderControls}>
        {/* <h3 style={{textAlign: 'center'}}>Choose what you would like to ask</h3> */}
        <div className={classes.enabledQuestions}>
          {enabledQuestions}
        </div>
        <div className={classes.disabledQuestions}>
          {disabledQuestions}
        </div>
        {/* <button onClick={this.props.postPersonHandler}>TEST SUBMIT</button> */}
      </div>
    )

  }
}

export default UploaderControls