// This container will show a single person post, relevant data and comments

import React, { Component } from 'react'

class Person extends Component {

  state = {
    ownerId: null,
    imageURL: null
  }

  componentDidMount () {
    // TODO: Get person data from db, update state
  }

  render () {


    return (
      <>
        {/* PersonImage Component - Displays placeholder/uploaded image of new person */}
        {/* Display most common choices, comments, etc */}
      </>
    )

  }


}

export default Person