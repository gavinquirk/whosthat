// This container will show a single person post, relevant data and comments

import React, { Component } from 'react'
import axios from '../../axios-persons'

import PersonImage from '../../components/PersonImage/PersonImage'

class Person extends Component {

  state = {
    personData: []
  }

  componentDidMount () {
    // Query for person data based on key/id url parameter, set state with data
    const key=(this.props.match.params.id)
    const queryParams = '?orderBy="$key"&equalTo="' + key + '"'
    axios.get('/persons.json' + queryParams)
    .then(res => {
      const personData = []
      for (let key in res.data) {
        personData.push({
          ...res.data[key],
          id: key
        })
      }
      this.setState({personData: personData[0]})
    })
    .catch(error => {
      throw error
    })
  }

  render () {

    return (
      <>
        <PersonImage
          imageUrl={this.state.personData.imageUrl}
        />
        {/* Answer form for user, or statement that user has already answered */}
        {/* Most popular answers */}

      </>
    )

  }


}

export default Person