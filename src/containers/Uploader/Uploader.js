// This container will contain a page on which users can upload their image and create a new person post

// On upload to uploadcare, save a new entry into Persons collection:
// const Person = {
//   owner: 'User ID of uploader',
//   image: 'Uploadcare URL of image',
//   comments: 'Comments from other users'
// }


import React, { Component } from 'react'
import axios from '../../axios-persons';

import PersonImage from '../../components/PersonImage/PersonImage'
import UploaderControls from '../../components/UploaderControls/UploaderControls'

class Uploader extends Component {

  state = {
    ownerId: 'currentUser',
    imageURL: 'https://d279m997dpfwgl.cloudfront.net/wp/2018/07/0725_ross01-1000x652.jpg',
    // comments: null
  }

  postPersonHandler = () => {
    // TODO: Grab ownerId from login and imageURL from state (after image is uploaded to uploadcare)
    console.log('Submitting new person')
    const person = {
      ownerId: this.state.ownerId,
      imageURL: this.state.imageURL,
      // comments:
    }

    axios.post('/persons.json', person)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render () {

    return (
      <>
        <PersonImage />
        <div style={{gridColumn: '1 / -1', textAlign: 'center'}}>
          <button>UPLOADCARE WIDGET</button>
        </div>
        <UploaderControls
          postPersonHandler={this.postPersonHandler}
        />
      </>
    )

  }


}

export default Uploader