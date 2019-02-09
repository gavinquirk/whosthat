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
    selectedQuestions: questions
  }

  toggleSelectionHandler = (event) => {
    // TODO: Should this be done immutably?
    const oldArray = this.state.selectedQuestions

    // If the array already contains the selection
    if (this.state.selectedQuestions.includes(event.target.innerText)) {
      // Remove it from the array
      var newArray = oldArray.filter(e => e !== event.target.innerText)
      this.setState({ selectedQuestions: newArray})
    } else {
      // If not, add it to the array
      const newArray = oldArray.concat(event.target.innerText)
      this.setState({ selectedQuestions: newArray})
    }
  }

  render () {

    const questionsDisplay = this.state.selectedQuestions.map(question =>
      <p onClick={this.toggleSelectionHandler}>{question.valueOf()}</p>
    )


    return (
      <div className={classes.UploaderControls}>
        <h3 style={{textAlign: 'center'}}>Choose what you would like to ask</h3>
        {questionsDisplay}
        <button onClick={this.props.postPersonHandler}>TEST SUBMIT</button>
      </div>
    )

  }
}

export default UploaderControls