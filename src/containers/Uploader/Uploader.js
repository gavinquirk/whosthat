import React, { Component } from 'react'
import axios from '../../axios-persons';

import PersonImage from '../../components/PersonImage/PersonImage'
import UploaderControls from '../../components/UploaderControls/UploaderControls'
import UploadWidget from '../../components/UploadWidget/UploadWidget';

import placeholderImage from '../../assets/user-placeholder.png'

import classes from './Uploader.module.css'

const questions = [
  "What is this persons name?",
  "What is this persons age?",
  "What is this persons occupation?",
  "Would you be friends with this person?"
]

class Uploader extends Component {

  state = {
    ownerId: 'testUser',
    imageUrl: placeholderImage,
    enabledQuestions: questions,
    disabledQuestions: ["test"]
  }

  postPersonHandler = () => {
    // TODO: Grab ownerId from login and imageURL from state (after image is uploaded to uploadcare)
    console.log('Submitting new person')
    const person = {
      ownerId: this.state.ownerId,
      imageUrl: this.state.imageUrl,
      questions: this.state.enabledQuestions,
      comments: []
    }

    axios.post('/persons.json', person)
      .then(response => this.props.history.push('/person/' + response.data.name))
      // .then(response => console.log(response.data.name))
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
        <PersonImage
          imageUrl={this.state.imageUrl}
        />
        <div style={{gridColumn: '1 / -1', textAlign: 'center', margin: '3rem'}}>
        <UploadWidget
          id='file'
          name='file'
          onUploadComplete={info => this.setState({imageUrl: info.cdnUrl})} />
        </div>

        <UploaderControls
          onPostPerson={this.postPersonHandler}
          onToggleSelection={this.toggleSelectionHandler}
          enabledQuestions={this.state.enabledQuestions}
          disabledQuestions={this.state.disabledQuestions}
        />
        <button className={classes.SubBtn} onClick={this.postPersonHandler}>Submit</button>
      </>
    )

  }


}

export default Uploader