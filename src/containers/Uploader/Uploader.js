import React, { Component } from 'react'
import axios from '../../axios-persons';

import PersonImage from '../../components/PersonImage/PersonImage'
import UploaderControls from '../../components/UploaderControls/UploaderControls'

const questions = [
  "What is this persons name?",
  "What is this persons age?",
  "What is this persons occupation?",
  "Would you be friends with this person?"
]

class Uploader extends Component {

  state = {
    ownerId: 'currentUser',
    imageURL: 'https://d279m997dpfwgl.cloudfront.net/wp/2018/07/0725_ross01-1000x652.jpg',
    enabledQuestions: questions,
    disabledQuestions: ["test"]
    // comments: null
  }

  postPersonHandler = (enabledQuestions) => {
    // TODO: Grab ownerId from login and imageURL from state (after image is uploaded to uploadcare)
    console.log('Submitting new person')
    const person = {
      ownerId: this.state.ownerId,
      imageURL: this.state.imageURL,
      questions: enabledQuestions
      // comments:
    }

    axios.post('/persons.json', person)
      .then(response => console.log(response))
      .catch(error => console.log(error))
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

    return (
      <>
        <PersonImage />
        <div style={{gridColumn: '1 / -1', textAlign: 'center'}}>
          <button>UPLOADCARE WIDGET</button>
        </div>
        <UploaderControls
          onPostPerson={this.postPersonHandler}
          onToggleSelection={this.toggleSelectionHandler}
          enabledQuestions={this.state.enabledQuestions}
          disabledQuestions={this.state.disabledQuestions}
        />
      </>
    )

  }


}

export default Uploader